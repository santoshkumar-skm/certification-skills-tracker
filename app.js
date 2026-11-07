/* global supabase */
const cfg = window.APP_CONFIG || {};
const ready = cfg.supabaseUrl && cfg.supabaseAnonKey && !cfg.supabaseUrl.includes('YOUR_');
// Keep password sessions in browser storage and refresh them on this device.
const db = ready ? supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
  auth: { detectSessionInUrl: false, persistSession: true, autoRefreshToken: true }
}) : null;
let currentUser = null, certifications = [], skills = [], workspaceChannel = null, loadVersion = 0, showAllCerts = false, editingCert = null, editingSkill = null;
const $ = s => document.querySelector(s);
const esc = s => String(s || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function safeLink(value) { try { const url=new URL(value);return ['http:','https:'].includes(url.protocol)?esc(url.href):''; }catch{return '';} }
function empty(container) { container.replaceChildren($('#empty-state').content.cloneNode(true)); }
function expiry(cert) { if (!cert.expiry_date) return ['Current','']; const d = Math.ceil((new Date(cert.expiry_date)-new Date())/86400000); return d < 0 ? ['Expired','expiring'] : d <= 90 ? [`Expires in ${d}d`,'expiring'] : ['Current','']; }
function render() {
  const now = new Date(); const expiring = certifications.filter(c=>c.expiry_date && (new Date(c.expiry_date)-now)/86400000 <= 90 && new Date(c.expiry_date)>=now).length;
  $('#stats').innerHTML = `<article class="card stat"><p>ACTIVE CERTIFICATIONS</p><strong>${certifications.filter(c=>!c.expiry_date || new Date(c.expiry_date)>=now).length}</strong></article><article class="card stat"><p>SKILLS IN PROGRESS</p><strong>${skills.filter(s=>s.progress<100).length}</strong></article><article class="card stat"><p>EXPIRING SOON</p><strong class="accent">${expiring}</strong></article>`;
  const cl = $('#cert-list'); if (!certifications.length) empty(cl); else cl.innerHTML = (showAllCerts?certifications:certifications.slice(0,5)).map(c=>{const [label,cn]=expiry(c);return `<div class="cert-item"><span class="cert-icon">✦</span><div class="cert-info"><strong>${esc(c.name)}</strong><small>${esc(c.issuer)}${c.expiry_date ? ` · ${esc(c.expiry_date)}` : ''}</small>${safeLink(c.credential_url)?`<a href="${safeLink(c.credential_url)}" target="_blank" rel="noopener noreferrer">View credential ↗</a>`:''}</div><span class="badge ${cn}">${label}</span><button class="text-button" data-edit-cert="${c.id}">Edit</button><button class="delete" data-delete-cert="${c.id}" aria-label="Delete ${esc(c.name)}">×</button></div>`}).join('');
  const sl = $('#skill-list'); if (!skills.length) empty(sl); else sl.innerHTML=skills.map(s=>`<div class="skill-row"><div><strong>${esc(s.name)}</strong><small> · ${esc(s.level)} · ${Number(s.progress)||0}%</small></div><div><button class="text-button" data-edit-skill="${s.id}">Edit</button><button class="delete" data-delete-skill="${s.id}" aria-label="Delete ${esc(s.name)}">×</button></div><div class="meter"><span style="width:${Number(s.progress)||0}%"></span></div></div>`).join('');
}
async function readAllRows(table,userId) {
  const rows=[];
  for(let offset=0;;offset+=500){
    const result=await db.from(table).select('*').eq('user_id',userId).order('created_at',{ascending:false}).order('id',{ascending:true}).range(offset,offset+499);
    if(result.error)return result;
    rows.push(...(result.data||[]));
    if((result.data||[]).length<500)return {data:rows,error:null};
    if(currentUser?.id!==userId)return {data:[],error:null};
  }
}
async function load() {
  if(!currentUser)return;
  const userId=currentUser.id,version=++loadVersion;
  $('#workspace-message').textContent='Synchronizing your workspace…';
  try {
    const [c,s]=await Promise.all([readAllRows('certifications',userId),readAllRows('skills',userId)]);
    if(currentUser?.id!==userId||version!==loadVersion)return;
    if(c.error||s.error)throw c.error||s.error;
    certifications=c.data||[]; learningRows=(s.data||[]).filter(r=>r.name.startsWith('@sv1/'));skills=(s.data||[]).filter(r=>!r.name.startsWith('@sv1/'));
    render();renderLearning();$('#workspace-message').textContent='Your workspace is up to date.';
  }catch(error){if(currentUser?.id===userId&&version===loadVersion)$('#workspace-message').textContent='Could not sync your workspace: '+error.message+' Please retry using Refresh data.';}
}
function dashboard(user) {
  if(currentUser?.id===user.id)return;
  currentUser=user;certifications=[];skills=[];learningRows=[];
  $('#auth-view').hidden=true;$('#dashboard').hidden=false;
  $('#greeting-name').textContent=(user.email||'there').split('@')[0]+'.';
  $('#account-area').innerHTML=`<span>${esc(user.email)}</span><button id="refresh-data" class="text-button">Refresh data</button><button id="set-password" class="text-button">Set password</button><button id="logout" class="text-button">Sign out</button>`;
  $('#refresh-data').onclick=load;
  $('#logout').onclick=async()=>{const {error}=await db.auth.signOut({scope:'local'});if(error)$('#workspace-message').textContent='Could not sign out: '+error.message;else authScreen();};
  $('#set-password').onclick=()=>$('#password-dialog').showModal();
  render();renderLearning();setTimeout(load,0);
  if(workspaceChannel)db.removeChannel(workspaceChannel);
  workspaceChannel=db.channel('private-workspace-'+user.id).on('postgres_changes',{event:'*',schema:'public',table:'certifications',filter:`user_id=eq.${user.id}`},load).on('postgres_changes',{event:'*',schema:'public',table:'skills',filter:`user_id=eq.${user.id}`},load).subscribe(status=>{if(status==='CHANNEL_ERROR'||status==='TIMED_OUT')$('#workspace-message').textContent='Live updates disconnected. Refresh data to retry.';});
}
function authScreen() {
  currentUser=null;activeQuiz=null;$('#subquiz-content').replaceChildren();editingCert=null;editingSkill=null;showAllCerts=false;++loadVersion;certifications=[];skills=[];learningRows=[];
  if(workspaceChannel){db.removeChannel(workspaceChannel);workspaceChannel=null;}
  document.querySelectorAll('dialog[open]').forEach(d=>d.close());
  $('#flow-map').replaceChildren();$('#roadmap-detail').replaceChildren();$('#stats').replaceChildren();$('#cert-list').replaceChildren();$('#skill-list').replaceChildren();$('#learning-content').replaceChildren();$('#learning-overview').replaceChildren();
  $('#auth-view').hidden=false;$('#dashboard').hidden=true;$('#account-area').textContent='Private & synchronized';
}
$('#password-form').addEventListener('submit', async e=>{e.preventDefault();const msg=$('#password-message'),f=new FormData(e.target);msg.textContent='Signing in…';const {error}=await db.auth.signInWithPassword({email:f.get('email'),password:f.get('password')});msg.textContent=error?'Unable to sign in: '+error.message:'Signed in.';});
$('#create-account').onclick=async()=>{const form=$('#password-form'),msg=$('#password-message'),f=new FormData(form),email=f.get('email'),password=f.get('password');if(!form.reportValidity())return;msg.textContent='Creating your account…';const {data,error}=await db.auth.signUp({email,password});if(error){msg.textContent='Unable to create account: '+error.message;return;}if(data.session){msg.textContent='Account created. Opening your dashboard…';return;}msg.textContent='Your Supabase project still requires email confirmation. In Supabase Dashboard, open Authentication → Providers → Email and turn off Confirm email, then create the account again.';};
$('#add-cert-btn').onclick=()=>{editingCert=null;$('#cert-form').reset();$('#cert-dialog h2').textContent='Add certification';$('#cert-dialog').showModal();}; $('#add-skill-btn').onclick=()=>{editingSkill=null;$('#skill-form').reset();$('#progress-output').textContent='60%';$('#skill-dialog h2').textContent='Add a skill';$('#skill-dialog').showModal();}; document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$('#'+b.dataset.close).close());
$('#progress').oninput=e=>$('#progress-output').textContent=e.target.value+'%';
$('#set-password-form').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target),msg=$('#set-password-message'),password=f.get('password');if(password!==f.get('confirmPassword')){msg.textContent='The passwords do not match.';return;}msg.textContent='Saving password…';const {error}=await db.auth.updateUser({password});if(error){msg.textContent='Unable to save password: '+error.message;return;}e.target.reset();msg.textContent='Password saved. You can now use password sign-in.';setTimeout(()=>$('#password-dialog').close(),900);});
async function saveForm(event,table,dialog,values,id) {
  const button=event.target.querySelector('button.primary');button.disabled=true;
  try {
    if(!currentUser)throw Error('Please sign in again.');
    const query=id?db.from(table).update(values).eq('id',id).eq('user_id',currentUser.id):db.from(table).insert({...values,user_id:currentUser.id});
    const {error}=await query;if(error)throw error;
    event.target.reset();$(dialog).close();await load();
  }catch(error){alert('Could not save: '+error.message);}finally{button.disabled=false;}
}
$('#cert-form').addEventListener('submit',async e=>{
  e.preventDefault();const f=new FormData(e.target);
  if(f.get('expiry_date')&&f.get('issue_date')&&f.get('expiry_date')<f.get('issue_date'))return alert('Expiry date must follow the issue date.');
  if(f.get('credential_url')&&!safeLink(f.get('credential_url')))return alert('Use an http or https credential URL.');
  await saveForm(e,'certifications','#cert-dialog',{name:f.get('name'),issuer:f.get('issuer'),issue_date:f.get('issue_date')||null,expiry_date:f.get('expiry_date')||null,credential_url:f.get('credential_url')||null},editingCert);
});
$('#skill-form').addEventListener('submit',async e=>{
  e.preventDefault();const f=new FormData(e.target);
  if(String(f.get('name')).startsWith('@sv1/'))return alert('Please choose a different skill name.');
  await saveForm(e,'skills','#skill-dialog',{name:f.get('name'),level:f.get('level'),progress:+f.get('progress')},editingSkill);
});
document.addEventListener('click',async e=>{
  const target=e.target.closest('button');if(!target||!currentUser)return;
  const c=target.dataset.deleteCert,s=target.dataset.deleteSkill,ec=target.dataset.editCert,es=target.dataset.editSkill;
  if(ec||es){
    const record=(ec?certifications:skills).find(r=>r.id===(ec||es));if(!record)return;
    const form=$(ec?'#cert-form':'#skill-form');
    for(const [key,value] of Object.entries(record))if(form.elements.namedItem(key))form.elements.namedItem(key).value=value??'';
    if(ec){editingCert=ec;$('#cert-dialog h2').textContent='Edit certification';$('#cert-dialog').showModal();}
    else{editingSkill=es;$('#progress-output').textContent=record.progress+'%';$('#skill-dialog h2').textContent='Edit skill';$('#skill-dialog').showModal();}
  }
  if((c||s)&&confirm(c?'Delete this certification?':'Delete this skill?')){
    const {error}=await db.from(c?'certifications':'skills').delete().eq('id',c||s).eq('user_id',currentUser.id);
    if(error)$('#workspace-message').textContent='Could not delete: '+error.message;else await load();
  }
});
async function initialiseAuth() {
  if (!ready) { authScreen(); $('#password-message').textContent='Preview mode: connect Supabase to enable secure login and sync.'; return; }
  db.auth.onAuthStateChange((_event, session)=>{setTimeout(()=>session ? dashboard(session.user) : authScreen(),0);});
  const { data: { session }, error } = await db.auth.getSession();
  if (error) { authScreen(); $('#password-message').textContent='Unable to restore your sign-in: '+error.message; return; }
  session ? dashboard(session.user) : authScreen();

}
$('#view-all-btn').onclick=()=>{showAllCerts=!showAllCerts;$('#view-all-btn').textContent=showAllCerts?'Show recent':'View all';render();};
window.addEventListener('online',()=>{if(currentUser)load();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&currentUser)load();});
initLearning();
initialiseAuth();
