let activeQuiz=null;
function quizDomain(c){
  if(c.provider==='NVIDIA')return 'usd';
  if(['v2m11','v2m12','v2m13','v2m14'].includes(c.id))return 'robotics';
  if(c.id==='v2m15')return 'agents';
  if(['v2m16','v2m17'].includes(c.id))return 'synthetic';
  if(['v2m19','v2m21','v2m22','v2m24'].includes(c.id))return 'prompt';
  if(['v2m23','v2m26'].includes(c.id))return 'fluency';
  if(['v2m25','v2m27','v2m28'].includes(c.id))return 'coding';
  if(['v2m20','v2m29'].includes(c.id))return 'product';
  if(c.id==='v2m30')return 'vr';return 'genai';
}
function quizHash(s){return Array.from(s).reduce((n,ch)=>(n*31+ch.charCodeAt(0))>>>0,7);}
function questionsFor(c,sub){
  const terms=sub.title.toLowerCase().split(/\W+/).filter(t=>t.length>3);
  return QUESTION_BANKS[quizDomain(c)].map(q=>({...q,relevance:terms.filter(t=>(q.question+' '+q.options.join(' ')).toLowerCase().includes(t)).length}))
    .sort((a,b)=>b.relevance-a.relevance||quizHash(sub.id+a.id)-quizHash(sub.id+b.id)).slice(0,15).map(q=>{
      const shift=quizHash(c.id+sub.id+q.id)%q.options.length;
      return {...q,options:q.options.map((_,i)=>q.options[(i+shift)%q.options.length]),answer:(q.answer-shift+q.options.length)%q.options.length};
    });
}
function answerKey(quiz,q){return `@sv1/answer/v1/${quiz.course.id}/${quiz.sub.id}/${q.id}`;}
function savedAnswer(quiz,q){const row=learningRows.find(r=>r.name===answerKey(quiz,q));return row?row.progress-1:null;}
async function resetSubQuiz(){
  const quiz=activeQuiz,userId=currentUser?.id;
  if(!quiz||!userId||quiz.saving)return;
  if(!confirm('Reset this quiz’s answers and score so you can retake it? Your learning progress and other quizzes will stay unchanged.'))return;
  quiz.saving=true;renderSubQuiz();
  const keys=quiz.questions.map(q=>answerKey(quiz,q));
  try{
    const {error}=await db.from('skills').delete().eq('user_id',userId).in('name',keys);
    if(error)throw error;
    if(currentUser?.id!==userId)return;
    ++loadVersion;
    learningRows=learningRows.filter(r=>!keys.includes(r.name));
    quiz.index=0;quiz.saving=false;renderLearning();
    if(activeQuiz===quiz){renderSubQuiz();$('#subquiz-message').textContent='Quiz reset. You can start again.';}
  }catch(error){if(activeQuiz===quiz&&currentUser?.id===userId){quiz.saving=false;renderSubQuiz();$('#subquiz-message').textContent='Could not reset quiz: '+error.message;}}
  finally{quiz.saving=false;}
}
function openSubQuiz(courseId,subId){
  const course=ROADMAP.find(c=>c.id===courseId),sub=course?.submodules.find(t=>t.id===subId);if(!sub)return;
  activeQuiz={course,sub,questions:questionsFor(course,sub),index:0};
  renderSubQuiz();$('#subquiz-dialog').showModal();
}
function renderSubQuiz(){
  if(!activeQuiz)return;
  const quiz=activeQuiz,q=quiz.questions[quiz.index],selected=savedAnswer(quiz,q);
  const attempted=quiz.questions.filter(q=>savedAnswer(quiz,q)!==null).length;
  const correct=quiz.questions.filter(q=>savedAnswer(quiz,q)===q.answer).length;
  $('#subquiz-content').innerHTML=`<p class="eyebrow">${esc(quiz.course.pathTitle)}</p><h2>${esc(quiz.sub.title)}</h2><p>Sub-topic practice and related prerequisite concepts · ${quiz.questions.length} questions</p><div class="quiz-stats"><span>Questions <strong>${quiz.questions.length}</strong></span><span>Answered <strong>${attempted}</strong></span><span>Correct <strong>${correct}</strong></span><button type="button" id="reset-subquiz" class="secondary" ${!attempted||quiz.saving?'disabled':''}>${quiz.saving?'Saving…':'Reset Quiz'}</button></div><p>Question ${quiz.index+1} / ${quiz.questions.length}</p><h3>${esc(q.question)}</h3><div class="quiz-answers">${q.options.map((option,i)=>`<button type="button" data-subanswer="${i}" class="quiz-choice ${selected===null?'':i===q.answer?'answer-correct':'answer-incorrect'} ${selected===i?'answer-selected':''}" ${selected===null&&!quiz.saving?'':'disabled'}>${esc(option)}${selected===null?'':i===q.answer?' ✓ Correct':selected===i?' — Your answer':''}</button>`).join('')}</div><p role="status" id="subquiz-message">${selected===null?'Choose an answer to reveal feedback.':esc(q.explanation)}</p><p><a href="${esc(quiz.sub.url)}" target="_blank" rel="noopener noreferrer">Review the sub-topic source ↗</a></p><div class="modal-actions"><button class="secondary" data-subquiz-move="-1" ${quiz.index===0?'disabled':''}>Previous</button><button class="primary" data-subquiz-move="1" ${quiz.index===quiz.questions.length-1?'disabled':''}>Next</button></div>${attempted===quiz.questions.length?`<p class="quiz-result">Complete: ${correct}/${quiz.questions.length} correct (${Math.round(correct/quiz.questions.length*100)}%). Topic completion remains your separate practice decision.</p>`:''}`;
}
document.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id==='reset-subquiz')await resetSubQuiz();
  if(b.dataset.subquiz)openSubQuiz(b.dataset.subquiz,b.dataset.subid);
  if(b.dataset.subquizMove&&activeQuiz){activeQuiz.index=Math.max(0,Math.min(activeQuiz.questions.length-1,activeQuiz.index+Number(b.dataset.subquizMove)));renderSubQuiz();}
  if(b.dataset.subanswer!==undefined&&activeQuiz){
    const quiz=activeQuiz,q=quiz.questions[quiz.index],userId=currentUser?.id;
    if(savedAnswer(quiz,q)!==null||quiz.saving)return;
    quiz.saving=true;b.disabled=true;
    try{await saveLearning(answerKey(quiz,q),Number(b.dataset.subanswer)+1);quiz.saving=false;if(activeQuiz===quiz&&currentUser?.id===userId)renderSubQuiz();}
    catch(error){quiz.saving=false;if(activeQuiz===quiz){renderSubQuiz();$('#subquiz-message').textContent='Answer not saved: '+error.message;b.disabled=false;}}
    finally{quiz.saving=false;}
  }
});
