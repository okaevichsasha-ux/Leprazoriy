
document.querySelectorAll('.accordion .head').forEach(h=>{
  h.addEventListener('click', ()=>{
    const item=h.parentElement; const body=item.querySelector('.body');
    const open=item.classList.toggle('open'); body.style.maxHeight=open?body.scrollHeight+'px':0;
  });
});
