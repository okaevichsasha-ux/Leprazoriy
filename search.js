
async function run(){
  const q = document.getElementById('q').value.toLowerCase().trim();
  const res = document.getElementById('results'); const stats=document.getElementById('stats');
  if(!q){res.innerHTML=''; stats.textContent='Введіть запит.'; return;}
  const idx = await fetch('search-index.json').then(r=>r.json());
  const tokens=q.split(/\s+/).filter(Boolean);
  const scored = idx.map(e=>{
    const t=(e.title||'').toLowerCase(), sn=(e.snippet||'').toLowerCase(), tags=(e.tags||[]).join(' ').toLowerCase();
    let s=0; for(const tok of tokens){ if(t.includes(tok)) s+=2; if(tags.includes(tok)) s+=1.5; if(sn.includes(tok)) s+=1; }
    return {...e,_s:s};
  }).filter(e=>e._s>0).sort((a,b)=>b._s-a._s).slice(0,40);
  stats.textContent=`Знайдено ${scored.length} результат(и/ів).`;
  res.innerHTML = scored.map(e=>`<div class="result"><a href="${e.url}">${e.title}</a><div class="small">${e.snippet}</div></div>`).join("");
}
document.getElementById('go').addEventListener('click', run);
document.getElementById('q').addEventListener('keydown', e=>{ if(e.key==='Enter') run(); });
