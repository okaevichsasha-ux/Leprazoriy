
// slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let idx = 0;
function show(i){ slides.forEach((s,k)=>s.style.display=k===i?'grid':'none'); dots.forEach((d,k)=>d.classList.toggle('active',k===i)); }
if(slides.length){ show(0); setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); }, 5000); }
// accordion
document.querySelectorAll('.accordion .head').forEach(h=>{
  h.addEventListener('click', ()=>{
    const item = h.parentElement;
    const body = item.querySelector('.body');
    const open = item.classList.toggle('open');
    body.style.maxHeight = open ? body.scrollHeight + 'px' : 0;
  });
});
// team tabs
const teamTabs = document.querySelectorAll('[data-team-tab]');
teamTabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    teamTabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active');
    const role = tab.getAttribute('data-team-tab');
    document.querySelectorAll('[data-role]').forEach(card=>{
      const match = role==='all' || card.getAttribute('data-role')===role;
      card.style.display = match ? 'flex' : 'none';
    });
  });
});
// testimonials
const track = document.querySelector('.test-track');
if(track){
  let x = 0; setInterval(()=>{
    x = (x + 1) % track.children.length;
    const step = track.children[0].getBoundingClientRect().width + 16;
    track.style.transform = `translateX(${-x*step}px)`;
  }, 6000);
}
