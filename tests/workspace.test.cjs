const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const {webcrypto}=require('node:crypto');

function workspace({user=null,store=[],failure=null}={}) {
  const nodes=new Map(),events={},timers=[],stats={channels:0,removals:0,options:null},auth={user,callback:null};
  function node(selector){if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',textContent:'',value:selector==='#track-filter'?'all':'',hidden:false,open:false,dataset:{},listeners:{},addEventListener(e,fn){this.listeners[e]=fn;},replaceChildren(){this.innerHTML='';},showModal(){this.open=true;},close(){this.open=false;},setAttribute(){},reset(){},querySelector(){return node('submit');},content:{cloneNode(){return {};}}});return nodes.get(selector);}
  const client={
    auth:{getSession:async()=>({data:{session:auth.user?{user:auth.user}:null}}),onAuthStateChange(fn){auth.callback=fn;},signOut:async()=>{auth.user=null;auth.callback('SIGNED_OUT',null);return {};},signInWithPassword:async()=>({}),signUp:async()=>({data:{}})},
    from(table){const filters=[];let action='select',row=null,range=null;
      const q={select(){return q;},eq(k,v){filters.push([k,v]);return q;},order(){return q;},range(a,b){range=[a,b];return q;},delete(){action='delete';return q;},upsert(r){action='upsert';row=r;return q;},update(r){action='update';row=r;return q;},insert(r){action='insert';row=r;return q;},then(resolve,reject){return Promise.resolve().then(()=>{
        if(failure)return {error:{message:failure},data:null};
        if(action==='upsert'){assert.equal(row.user_id,auth.user.id);const i=store.findIndex(r=>r.id===row.id);if(i<0)store.push({...row,table});else store[i]={...row,table};return {error:null};}
        const matches=r=>r.table===table&&filters.every(([k,v])=>r[k]===v);
        if(action==='update'){store.filter(matches).forEach(r=>Object.assign(r,row));return {error:null};}
        if(action==='insert'){store.push({...row,id:webcrypto.randomUUID(),table});return {error:null};}
        if(action==='delete'){for(let i=store.length-1;i>=0;i--)if(matches(store[i]))store.splice(i,1);return {error:null};}
        return {data:range?store.filter(matches).slice(range[0],range[1]+1):store.filter(matches),error:null};
      }).then(resolve,reject);}};return q;
    },
    channel(){stats.channels++;const q={on(){return q;},subscribe(){return q;}};return q;},removeChannel(){stats.removals++;}
  };
  const ctx=vm.createContext({URL,window:{APP_CONFIG:{supabaseUrl:'https://test.invalid',supabaseAnonKey:'test'},addEventListener(){}},document:{hidden:false,querySelector:node,querySelectorAll(){return [];},addEventListener(e,fn){(events[e]??=[]).push(fn);}},supabase:{createClient(url,key,options){stats.options=options;return client;}},crypto:webcrypto,TextEncoder,console,setTimeout:fn=>timers.push(fn),alert(){},confirm:()=>true});
  for(const file of ['roadmap.js','learning.js','enhancements.js','question-banks.js','assessments.js','app.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
  async function settle(){for(let i=0;i<5;i++){while(timers.length)timers.shift()();await new Promise(r=>setImmediate(r));}}
  return {ctx,node,stats,auth,store,events,settle,run:code=>vm.runInContext(code,ctx)};
}

test('restores session, seeds all roadmap views, and avoids duplicate refresh subscriptions',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'}});await w.settle();
  assert.equal(w.stats.options.auth.persistSession,true);assert.equal(w.stats.options.auth.autoRefreshToken,true);
  assert.equal(w.node('#dashboard').hidden,false);assert.equal(w.node('#auth-view').hidden,true);
  assert.ok(w.run('ROADMAP.length')>30);assert.equal(w.run('new Set(ROADMAP.map(c=>c.track)).size'),5);
  assert.ok(w.run('ROADMAP.reduce((s,c)=>s+c.hours,0)')>=390);
  assert.equal(w.run('new Set(ROADMAP.map(c=>c.id)).size'),w.run('ROADMAP.length'));
  assert.equal((w.node('#learning-content').innerHTML.match(/class="course-card"/g)||[]).length,w.run('ROADMAP.length'));
  w.run("learningView='calendar';renderLearning()");assert.equal((w.node('#learning-content').innerHTML.match(/class="course-card"/g)||[]).length,w.run('Math.max(...ROADMAP.map(c=>c.week))'));
  w.run("learningView='projects';renderLearning()");assert.match(w.node('#learning-content').innerHTML,/Data Exchange Pipelines/);
  w.run("showRoadmap('v2m01')");assert.match(w.node('#roadmap-detail').innerHTML,/Create and reopen/);assert.equal(w.node('#roadmap-dialog').open,true);
  w.auth.callback('TOKEN_REFRESHED',{user:w.auth.user});await w.settle();assert.equal(w.stats.channels,1);
});
test('topic state is idempotent, survives reload, and is isolated by account',async()=>{
  const store=[],alice={id:'alice',email:'alice@example.test'},w=workspace({user:alice,store});await w.settle();
  await w.run("saveLearning(learningKey('v2m01',0),100)");await w.run("saveLearning(learningKey('v2m01',0),100)");assert.equal(store.length,1);
  assert.equal(w.run('courseProgress(ROADMAP[0])'),20);
  const reload=workspace({user:alice,store});await reload.settle();assert.equal(reload.run('courseProgress(ROADMAP[0])'),20);
  const bob=workspace({user:{id:'bob',email:'bob@example.test'},store});await bob.settle();assert.equal(bob.run('courseProgress(ROADMAP[0])'),0);
  await bob.run("saveLearning(learningKey('v2m01',0),100)");assert.equal(store.length,2);assert.notEqual(store[0].id,store[1].id);
  await reload.run("saveLearning(learningKey('v2m01',0),0)");assert.equal(reload.run('courseProgress(ROADMAP[0])'),0);
});
test('study hours persist and reserved records stay out of manual skills',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'}});await w.settle();
  await w.run("saveLearning('@sv1/log/v2m01/2026-11-07/90/entry',0)");await w.run('load()');
  assert.equal(w.run('learnedHours()'),1.5);assert.equal(w.run('skills.length'),0);
  w.run("learningView='analytics';renderLearning()");assert.match(w.node('#learning-content').innerHTML,/90 min/);
});
test('sign-out clears private data and next user starts with their own empty state',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'}});await w.settle();await w.run("saveLearning(learningKey('v2m01',0),100)");
  await w.node('#logout').onclick();await w.settle();assert.equal(w.node('#dashboard').hidden,true);assert.equal(w.run('learningRows.length'),0);assert.equal(w.node('#learning-content').innerHTML,'');assert.equal(w.stats.removals,1);
  w.auth.user={id:'bob',email:'bob@example.test'};w.auth.callback('SIGNED_IN',{user:w.auth.user});await w.settle();assert.equal(w.run('courseProgress(ROADMAP[0])'),0);
});
test('failed synchronization is visible and failed writes never mark a topic complete',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'},failure:'Network unavailable'});await w.settle();
  assert.match(w.node('#workspace-message').textContent,/Could not sync/);
  await assert.rejects(w.run("saveLearning(learningKey('v2m01',0),100)"),/Network unavailable/);assert.equal(w.run('courseProgress(ROADMAP[0])'),0);
  assert.match(w.node('#learning-content').innerHTML,/Stages, Prims/);
});
test('existing skills update without duplicates and script URLs are rejected',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'},store:[{table:'skills',id:'skill1',user_id:'alice',name:'Python',level:'beginner',progress:10}]});await w.settle();
  w.ctx.editEvent={target:{querySelector(){return {disabled:false};},reset(){}}};
  await w.run("saveForm(editEvent,'skills','#skill-dialog',{name:'Python',level:'intermediate',progress:75},'skill1')");
  assert.equal(w.store.length,1);assert.equal(w.store[0].progress,75);assert.match(w.node('#skill-list').innerHTML,/75%/);
  assert.equal(w.run("safeLink('javascript:alert(1)')"),'');
  assert.equal(w.run("safeLink('https://example.test/credential')"),'https://example.test/credential');
});
test('all modules have weighted resources and quizzes; roadmap responds to progress',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'}});await w.settle();
  assert.equal(w.run('ROADMAP.every(c=>c.submodules.length>0 && c.submodules.reduce((s,t)=>s+t.weight,0)===100 && c.submodules.every(t=>t.url.startsWith("https://")) && c.quiz.options[c.quiz.answer])'),true);
  assert.match(w.node('#flow-map').innerHTML,/flow-node current/);
  for(let i=0;i<4;i++)await w.run(`saveLearning(learningKey('v2m01',${i}),100)`);
  assert.equal(w.run('courseProgress(ROADMAP[0])'),100);assert.match(w.node('#flow-map').innerHTML,/flow-node complete/);
  await w.run("saveLearning('@sv1/quiz/v2m01',100)");await w.run('load()');w.run("showRoadmap('v2m01')");assert.match(w.node('#roadmap-detail').innerHTML,/Last saved score: 100%/);
  w.node('#resource-search').value='GR00T';w.run('renderResources()');assert.match(w.node('#resource-index').innerHTML,/GR00T/);assert.doesNotMatch(w.node('#resource-index').innerHTML,/Claude 101/);
});
test('every sub-topic has 15 stable MCQs and a valid specific path',async()=>{
  const w=workspace({user:{id:'alice',email:'alice@example.test'}});await w.settle();
  assert.equal(w.run('ROADMAP.every(c=>c.pathId && c.submodules.every(s=>s.pathId===c.pathId && questionsFor(c,s).length===15 && new Set(questionsFor(c,s).map(q=>q.id)).size===15 && questionsFor(c,s).every(q=>q.options[q.answer])))'),true);
  w.run("openSubQuiz('v2m01','0')");assert.equal(w.node('#subquiz-dialog').open,true);
  const key=w.run('answerKey(activeQuiz,activeQuiz.questions[0])');
  const answer=w.run('activeQuiz.questions[0].answer');
  await w.run(`saveLearning(${JSON.stringify(key)},${(answer+1)%3+1})`);w.run('renderSubQuiz()');
  assert.match(w.node('#subquiz-content').innerHTML,/answer-correct/);assert.match(w.node('#subquiz-content').innerHTML,/answer-incorrect/);assert.match(w.node('#subquiz-content').innerHTML,/Your answer/);
  w.run("showRoadmap('v2m01')");assert.doesNotMatch(w.node('#roadmap-detail').innerHTML,/Read this sub-topic/);assert.match(w.node('#roadmap-detail').innerHTML,/inline-hint/);
  w.node('#track-filter').value='ncp-ousd';w.run('renderLearning()');assert.doesNotMatch(w.node('#learning-content').innerHTML,/Robocademy/);
});
test('large quiz histories load beyond the backend page limit',async()=>{
  const store=Array.from({length:1100},(_,i)=>({table:'skills',id:'answer'+i,user_id:'alice',name:'@sv1/answer/test/'+i,progress:1}));
  const w=workspace({user:{id:'alice',email:'alice@example.test'},store});await w.settle();assert.equal(w.run('learningRows.length'),1100);
});
