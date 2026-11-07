/* Apply before the stylesheet paints; no account data is stored here. */
(function () {
  const key='skillvault-theme';
  function current(){return document.documentElement.dataset.theme==='dark'?'dark':'light';}
  function refresh(){document.querySelectorAll('[data-theme-toggle]').forEach(b=>{
    b.textContent=current()==='dark'?'☀ Light mode':'☾ Dark mode';
    b.setAttribute('aria-label',current()==='dark'?'Switch to light theme':'Switch to dark theme');
    b.setAttribute('aria-pressed',String(current()==='dark'));
  });}
  function set(value,persist=true){
    document.documentElement.dataset.theme=value==='dark'?'dark':'light';
    if(persist)try{localStorage.setItem(key,current());}catch{/* Preference still works for this visit. */}
    refresh();
  }
  let saved;try{saved=localStorage.getItem(key);}catch{}
  set(saved==='dark'||saved==='light'?saved:window.matchMedia?.('(prefers-color-scheme: dark)').matches?'dark':'light',false);
  window.Theme={current,set,refresh,toggle(){set(current()==='dark'?'light':'dark');}};
  document.addEventListener('click',e=>{if(e.target.closest('[data-theme-toggle]'))window.Theme.toggle();});
  window.addEventListener('storage',e=>{if(e.key===key)set(e.newValue==='dark'?'dark':'light',false);});
})();
