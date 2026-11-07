/* Learning state uses reserved @sv1/ skill rows under existing owner-only RLS. */
let learningRows = [], learningView = 'courses', learningBusy = false;
const learningKey = (course, topic) => `@sv1/topic/${course}/${topic}`;
const topicDone = (course, topic) => learningRows.some(r=>r.name===learningKey(course,topic)&&r.progress===100);
const courseProgress = c => c.submodules.reduce((sum,t,i)=>sum+(topicDone(c.id,t.id??i)?t.weight:0),0);
const studyLogs = () => learningRows.filter(r=>r.name.startsWith('@sv1/log/')).map(r=>{const [, , course,date,minutes]=r.name.split('/');return {...r,course,date,minutes:Number(minutes)};});
const learnedHours = () => studyLogs().reduce((n,r)=>n+r.minutes,0)/60;
const localDate = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
function courseCard(c) {
  const p=courseProgress(c),index=ROADMAP.indexOf(c);
  return `<article class="course-card"><small>${String(index+1).padStart(2,'0')} · ${esc(c.pathTitle)} · Week ${c.week}</small><h3>${esc(c.title)}</h3><small>${esc(c.pathType)}</small><p>${p}% complete · ${c.hours}h target${c.project?' · Practical project':''}</p><div class="meter"><span style="width:${p}%"></span></div><button class="text-button" data-roadmap="${c.id}">View roadmap &amp; update topics →</button></article>`;
}
function renderLearning() {
  if(typeof renderEnhancements==='function')renderEnhancements();
  const completed=ROADMAP.filter(c=>courseProgress(c)===100).length;
  const percent=Math.round(ROADMAP.reduce((n,c)=>n+courseProgress(c),0)/ROADMAP.length);
  $('#learning-overview').innerHTML=`<article class="card stat"><p>LEARNING PROGRESS</p><strong>${percent}%</strong><small>${completed} / ${ROADMAP.length} modules completed</small></article><article class="card stat"><p>STUDY HOURS</p><strong>${learnedHours().toFixed(1)} / ${ROADMAP.reduce((n,c)=>n+c.hours,0)}</strong><small>${Math.max(...ROADMAP.map(c=>c.week))} planned weeks</small></article><article class="card stat"><p>NEXT IN YOUR PLAN</p><strong class="next-module">${esc((ROADMAP.find(c=>courseProgress(c)<100)||{title:'All modules complete'}).title)}</strong></article>`;
  const filter=$('#track-filter').value;
  const query=($('#topic-search').value||'').toLowerCase(),status=$('#topic-status').value||'all';
  const courses=ROADMAP.filter(c=>(filter==='all'||c.pathId===filter)&&[c.title,c.pathTitle,...c.topics].join(' ').toLowerCase().includes(query)&&(status==='all'||(status==='complete'?courseProgress(c)===100:status==='current'?courseProgress(c)>0&&courseProgress(c)<100:courseProgress(c)===0)));
  $('#catalog-summary').textContent=`${ROADMAP.length} topics · ${ROADMAP.reduce((n,c)=>n+c.submodules.length,0)} sub-topics · ${new Set(ROADMAP.map(c=>c.pathId)).size} specific paths`;
  document.querySelectorAll('[data-learning-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.learningView===learningView)));
  if(learningView==='courses') $('#learning-content').innerHTML=courses.map(courseCard).join('');
  if(learningView==='projects') $('#learning-content').innerHTML=courses.filter(c=>c.project).map(courseCard).join('');
  if(learningView==='calendar') $('#learning-content').innerHTML=Array.from({length:Math.max(...ROADMAP.map(c=>c.week))},(_,i)=>{const week=i+1, assigned=courses.filter(c=>c.week===week);return `<article class="course-card"><h3>Week ${week}</h3><p>15h study target</p>${assigned.length?assigned.map(c=>`<button class="text-button" data-roadmap="${c.id}">${esc(c.title)} (${courseProgress(c)}%)</button>`).join('<br>'):'<p class="muted">Continue the preceding modules, practice, and review.</p>'}</article>`;}).join('');
  if(learningView==='analytics') $('#learning-content').innerHTML=`<div class="analytics-summary"><h3>Progress by track</h3>${[...new Set(ROADMAP.map(c=>c.track))].map((t,i)=>{const group=ROADMAP.filter(c=>c.trackIndex===i),p=Math.round(group.reduce((n,c)=>n+courseProgress(c),0)/group.length);return `<p>${esc(t)}: ${p}%</p><div class="meter"><span style="width:${p}%"></span></div>`;}).join('')}<h3>Study history</h3>${studyLogs().length?studyLogs().sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<p>${esc(r.date)} · ${esc(ROADMAP.find(c=>c.id===r.course)?.title||r.course)} · ${r.minutes} min <button class="text-button" data-delete-log="${esc(r.id)}">Remove</button></p>`).join(''):'<p>No study time logged yet. Use “Log study time” to begin.</p>'}</div>`;
}
function showRoadmap(id) {
  const c=ROADMAP.find(c=>c.id===id);if(!c)return;
  const index=ROADMAP.indexOf(c), previous=ROADMAP[index-1];
  $('#roadmap-detail').innerHTML=`<p class="eyebrow">MODULE ${index+1} · WEEK ${c.week}</p><h2>${esc(c.title)}</h2><p>${esc(c.pathTitle)} · ${c.hours} hours target</p><p>${previous?`Recommended preparation: ${esc(previous.title)}`:'Start here: no earlier module required.'}</p><div class="steps-heading"><h3>Learning steps</h3><details class="inline-hint"><summary aria-label="About learning completion">ⓘ</summary><span role="note">Mark a topic complete after practice. Completing this module does not award a credential.</span></details></div>${c.submodules.map((t,i)=>`<div class="subtopic-row"><input type="checkbox" aria-label="Mark ${esc(t.title)} complete" data-topic-course="${c.id}" data-topic-index="${t.id??i}" ${topicDone(c.id,t.id??i)?'checked':''}><a href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">${esc(t.title)} ↗</a><span class="subtopic-weight">${t.weight}%</span><button type="button" class="quiz-icon" data-subquiz="${c.id}" data-subid="${t.id??i}" aria-label="Quiz for ${esc(t.title)}" title="15-question practice quiz">?</button></div>`).join('')}<p><a href="${c.url}" target="_blank" rel="noopener noreferrer">Open official learning resource ↗</a></p>${c.id==='v2m10'?'<p><a href="https://www.nvidia.com/en-gb/learn/certification/openusd-development-professional/" target="_blank" rel="noopener noreferrer">Official OpenUSD certification objectives and exam details ↗</a></p>':''}<p id="topic-message" role="status"></p>`;
  $('#roadmap-detail').innerHTML+=moduleAssessment(c);
  if(!$('#roadmap-dialog').open)$('#roadmap-dialog').showModal();
}
async function recordId(key,userId) {
  const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(`${userId}:${key}`)));
  bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;
  const h=Array.from(bytes.slice(0,16),b=>b.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
async function saveLearning(name,progress) {
  if(!currentUser)throw Error('Please sign in again.');
  const userId=currentUser.id,id=await recordId(name,userId);
  const row={id,user_id:userId,name,level:'beginner',progress};
  const {error}=await db.from('skills').upsert(row,{onConflict:'id'});if(error)throw new Error(error.message);
  if(currentUser?.id!==userId)return;
  learningRows=learningRows.filter(r=>r.id!==id).concat(row);renderLearning();
}
function initLearning() {
  $('#track-filter').innerHTML+=[...new Map(ROADMAP.map(c=>[c.pathId,c.pathTitle]))].map(([id,title])=>`<option value="${id}">${esc(title)}</option>`).join('');
  $('#track-filter').onchange=renderLearning;$('#topic-search').oninput=renderLearning;$('#topic-status').onchange=renderLearning;
  $('#study-course').innerHTML=ROADMAP.map(c=>`<option value="${c.id}">${esc(c.title)}</option>`).join('');
  $('#log-study').onclick=()=>{$('#study-date').value=localDate();$('#study-date').max=localDate();$('#study-message').textContent='';$('#study-dialog').showModal();};
  document.addEventListener('click',async e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.roadmap)showRoadmap(b.dataset.roadmap);
    if(b.dataset.learningView){learningView=b.dataset.learningView;renderLearning();}
    if(b.dataset.deleteLog&&confirm('Remove this study entry?')){const {error}=await db.from('skills').delete().eq('id',b.dataset.deleteLog).eq('user_id',currentUser.id);if(error)$('#workspace-message').textContent=error.message;else await load();}
  });
  document.addEventListener('change',async e=>{
    const input=e.target;if(!input.dataset.topicCourse)return;
    input.disabled=true;const checked=input.checked;
    try{await saveLearning(learningKey(input.dataset.topicCourse,input.dataset.topicIndex),checked?100:0);if($('#topic-message'))$('#topic-message').textContent='Saved to your account.';}catch(error){input.checked=!checked;if($('#topic-message'))$('#topic-message').textContent=`Could not save: ${error.message}`;}finally{input.disabled=false;}
  });
  $('#study-form').onsubmit=async e=>{
    e.preventDefault();if(learningBusy)return;
    const f=new FormData(e.target),date=f.get('date'),minutes=Number(f.get('minutes'));
    if(date>localDate()||!Number.isInteger(minutes)||minutes<1||minutes>1440){$('#study-message').textContent='Enter a valid date and 1–1440 minutes.';return;}
    learningBusy=true;const button=e.target.querySelector('button.primary');button.disabled=true;
    try{await saveLearning(`@sv1/log/${f.get('course')}/${date}/${minutes}/${crypto.randomUUID()}`,0);e.target.reset();$('#study-dialog').close();}catch(error){$('#study-message').textContent=`Could not save: ${error.message}`;}finally{learningBusy=false;button.disabled=false;}
  };
}
