/* global supabase */
const cfg = window.APP_CONFIG || {};
const ready = cfg.supabaseUrl && cfg.supabaseAnonKey && !cfg.supabaseUrl.includes('YOUR_');
// GitHub Pages is a client-only site. Explicitly use the implicit flow so
// Supabase returns the session in the URL fragment, which the browser client
// can persist without a server-side callback route.
const db = ready ? supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
  auth: { flowType: 'implicit', detectSessionInUrl: true, persistSession: true }
}) : null;
let currentUser = null, certifications = [], skills = [];
const $ = s => document.querySelector(s);
const esc = s => String(s || '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function empty(container) { container.replaceChildren($('#empty-state').content.cloneNode(true)); }
function expiry(cert) { if (!cert.expiry_date) return ['Current','']; const d = Math.ceil((new Date(cert.expiry_date)-new Date())/86400000); return d < 0 ? ['Expired','expiring'] : d <= 90 ? [`Expires in ${d}d`,'expiring'] : ['Current','']; }
function render() {
  const now = new Date(); const expiring = certifications.filter(c=>c.expiry_date && (new Date(c.expiry_date)-now)/86400000 <= 90).length;
  $('#stats').innerHTML = `<article class="card stat"><p>ACTIVE CERTIFICATIONS</p><strong>${certifications.length}</strong></article><article class="card stat"><p>SKILLS IN PROGRESS</p><strong>${skills.length}</strong></article><article class="card stat"><p>EXPIRING SOON</p><strong class="accent">${expiring}</strong></article>`;
  const cl = $('#cert-list'); if (!certifications.length) empty(cl); else cl.innerHTML = certifications.slice(0,5).map(c=>{const [label,cn]=expiry(c);return `<div class="cert-item"><span class="cert-icon">✦</span><div class="cert-info"><strong>${esc(c.name)}</strong><small>${esc(c.issuer)}${c.expiry_date ? ` · ${esc(c.expiry_date)}` : ''}</small></div><span class="badge ${cn}">${label}</span><button class="delete" data-delete-cert="${c.id}" aria-label="Delete ${esc(c.name)}">×</button></div>`}).join('');
  const sl = $('#skill-list'); if (!skills.length) empty(sl); else sl.innerHTML=skills.map(s=>`<div class="skill-row"><div><strong>${esc(s.name)}</strong><small> · ${esc(s.level)}</small></div><button class="delete" data-delete-skill="${s.id}" aria-label="Delete ${esc(s.name)}">×</button><div class="meter"><span style="width:${Number(s.progress)||0}%"></span></div></div>`).join('');
}
async function load() { const [c,s] = await Promise.all([db.from('certifications').select('*').order('created_at',{ascending:false}),db.from('skills').select('*').order('created_at',{ascending:false})]); if(c.error||s.error) return alert('Could not load your workspace. Check your Supabase setup.'); certifications=c.data;skills=s.data;render(); }
function dashboard(user) { currentUser=user; $('#auth-view').hidden=true; $('#dashboard').hidden=false; $('#greeting-name').textContent=(user.email||'there').split('@')[0]+'.'; $('#account-area').innerHTML=`<span>${esc(user.email)}</span><button id="set-password" class="text-button">Set password</button><button id="logout" class="text-button">Sign out</button>`; $('#logout').onclick=()=>db.auth.signOut(); $('#set-password').onclick=()=>$('#password-dialog').showModal(); load(); db.channel('private-workspace').on('postgres_changes',{event:'*',schema:'public',table:'certifications',filter:`user_id=eq.${user.id}`},load).on('postgres_changes',{event:'*',schema:'public',table:'skills',filter:`user_id=eq.${user.id}`},load).subscribe(); }
function authScreen() { $('#auth-view').hidden=false; $('#dashboard').hidden=true; $('#account-area').textContent='Private & synchronized'; }
$('#password-form').addEventListener('submit', async e=>{e.preventDefault();const msg=$('#password-message'),f=new FormData(e.target);msg.textContent='Signing in…';const {error}=await db.auth.signInWithPassword({email:f.get('email'),password:f.get('password')});msg.textContent=error?'Unable to sign in: '+error.message:'Signed in.';});
$('#create-account').onclick=async()=>{const form=$('#password-form'),msg=$('#password-message'),f=new FormData(form),email=f.get('email'),password=f.get('password');if(!form.reportValidity())return;msg.textContent='Creating your account…';const {data,error}=await db.auth.signUp({email,password});if(error){msg.textContent='Unable to create account: '+error.message;return;}if(data.session){msg.textContent='Account created. Opening your dashboard…';return;}msg.textContent='Your Supabase project still requires email confirmation. In Supabase Dashboard, open Authentication → Providers → Email and turn off Confirm email, then create the account again.';};
$('#add-cert-btn').onclick=()=>$('#cert-dialog').showModal(); $('#add-skill-btn').onclick=()=>$('#skill-dialog').showModal(); document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$('#'+b.dataset.close).close());
$('#progress').oninput=e=>$('#progress-output').textContent=e.target.value+'%';
$('#set-password-form').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target),msg=$('#set-password-message'),password=f.get('password');if(password!==f.get('confirmPassword')){msg.textContent='The passwords do not match.';return;}msg.textContent='Saving password…';const {error}=await db.auth.updateUser({password});if(error){msg.textContent='Unable to save password: '+error.message;return;}e.target.reset();msg.textContent='Password saved. You can now use password sign-in.';setTimeout(()=>$('#password-dialog').close(),900);});
$('#cert-form').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target);const {error}=await db.from('certifications').insert({user_id:currentUser.id,name:f.get('name'),issuer:f.get('issuer'),issue_date:f.get('issue_date')||null,expiry_date:f.get('expiry_date')||null,credential_url:f.get('credential_url')||null});if(error)return alert(error.message);e.target.reset();$('#cert-dialog').close();load();});
$('#skill-form').addEventListener('submit',async e=>{e.preventDefault();const f=new FormData(e.target);const {error}=await db.from('skills').insert({user_id:currentUser.id,name:f.get('name'),level:f.get('level'),progress:+f.get('progress')});if(error)return alert(error.message);e.target.reset();$('#skill-dialog').close();load();});
document.addEventListener('click',async e=>{const c=e.target.dataset.deleteCert,s=e.target.dataset.deleteSkill;if(c&&confirm('Delete this certification?')) await db.from('certifications').delete().eq('id',c);if(s&&confirm('Delete this skill?')) await db.from('skills').delete().eq('id',s);});
async function initialiseAuth() {
  if (!ready) { authScreen(); $('#auth-message').textContent='Preview mode: connect Supabase to enable secure login and sync.'; return; }
  const query = new URLSearchParams(window.location.search);
  const callbackError = new URLSearchParams(window.location.hash.slice(1)).get('error_description') || query.get('error_description');
  if (callbackError) { authScreen(); $('#auth-message').textContent='Sign-in link could not be completed: '+callbackError; return; }
  const code = query.get('code');
  if (code) {
    const { error } = await db.auth.exchangeCodeForSession(code);
    if (error) { authScreen(); $('#auth-message').textContent='Sign-in link could not be completed: '+error.message; return; }
    history.replaceState({}, document.title, window.location.pathname);
  }
  const { data: { session }, error } = await db.auth.getSession();
  if (error) { authScreen(); $('#auth-message').textContent='Unable to restore your sign-in: '+error.message; return; }
  session ? dashboard(session.user) : authScreen();
  db.auth.onAuthStateChange((_event, nextSession)=>nextSession ? dashboard(nextSession.user) : authScreen());
}
initialiseAuth();
