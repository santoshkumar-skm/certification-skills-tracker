function moduleAssessment(c) {
  const score=learningRows.find(r=>r.name===`@sv1/quiz/${c.id}`)?.progress;
  return `<p class="muted">${esc(c.sourceNote)} Sub-modules and practice questions are tracker study aids.</p><section><h3>Quiz</h3><p>${esc(c.quiz.question)}</p>${c.quiz.options.map((o,i)=>`<button class="secondary quiz-option" data-quiz="${c.id}" data-answer="${i}">${esc(o)}</button>`).join('')}<p id="quiz-feedback" role="status">${score===undefined?'Not attempted':`Last saved score: ${score}%`}</p></section><section><h3>Q&amp;A</h3><details><summary>How do I demonstrate this module’s outcome?</summary><p>${esc(c.quiz.explanation)}</p><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Review the official source</a></details><details><summary>Does completing this tracker award a certificate?</summary><p>No. Complete the provider’s required learning and assessments. Where an exam or paid certificate is required, follow the provider’s enrollment requirements.</p></details></section>`;
}
function renderEnhancements(){
  if(typeof activeQuiz!=='undefined'&&activeQuiz)renderSubQuiz();
  const next=ROADMAP.find(c=>courseProgress(c)<100)?.id;
  const map=document.querySelector('#flow-map');if(!map)return;
  map.innerHTML=ROADMAP.map((c,i)=>{const p=courseProgress(c),status=p===100?'complete':p>0||c.id===next?'current':'pending';return `<div class="flow-step"><button class="flow-node ${status}" data-roadmap="${c.id}">${i+1}. ${esc(c.title)}<small>${status} · ${p}%</small></button>${i<ROADMAP.length-1?'<span aria-hidden="true">↓</span>':''}</div>`;}).join('');
  const hub=document.querySelector('#provider-hub');
  hub.innerHTML=[...new Set(ROADMAP.map(c=>c.provider))].map(provider=>`<details><summary>${esc(provider)} — earning roadmap</summary><p>Follow the numbered sequence below. Open each official resource for prerequisites, enrollment, assessment requirements, and current fees. Course completion and professional certification are different credentials.</p><ol>${ROADMAP.filter(c=>c.provider===provider).map(c=>`<li value="${ROADMAP.indexOf(c)+1}"><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.title)}</a> — ${c.id==='v2m10'?'Professional certification exam':'Learning course / supporting material'}<p>${esc(c.sourceNote)}</p></li>`).join('')}</ol>${provider==='AWS'?'<p><a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer">AWS certification exam catalog</a> — the sessions above do not themselves award an AWS exam certification.</p>':''}</details>`).join('');
  renderResources();
}
function renderResources(){
  const q=(document.querySelector('#resource-search')?.value||'').toLowerCase();
  document.querySelector('#resource-index').innerHTML=ROADMAP.filter(c=>[c.title,c.provider,...c.topics].join(' ').toLowerCase().includes(q)).map(c=>`<details><summary>${ROADMAP.indexOf(c)+1}. ${esc(c.title)} · ${esc(c.provider)}</summary><p><a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">Major module source ↗</a></p><ul>${c.submodules.map(t=>`<li><a href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">${esc(t.title)}</a> · ${t.weight}%</li>`).join('')}</ul><p>${esc(c.sourceNote)}</p></details>`).join('')||'<p>No matching resources.</p>';
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='open-flow'){$('#flow-dialog').showModal();renderEnhancements();}
  if(b.dataset.roadmap&&$('#flow-dialog').open)$('#flow-dialog').close();
  if(b.dataset.quiz){const c=ROADMAP.find(c=>c.id===b.dataset.quiz);const correct=Number(b.dataset.answer)===c.quiz.answer;b.disabled=true;try{await saveLearning(`@sv1/quiz/${c.id}`,correct?100:0);$('#quiz-feedback').textContent=(correct?'Correct. ':'Try again. ')+c.quiz.explanation;}catch(error){$('#quiz-feedback').textContent='Unable to save quiz: '+error.message;}finally{b.disabled=false;}}
});
document.addEventListener('input',e=>{if(e.target.id==='resource-search')renderResources();});
