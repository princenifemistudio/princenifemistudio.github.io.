const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
const wa='2349014688987';
document.querySelectorAll('[data-wa]').forEach(el=>{el.href=`https://wa.me/${wa}`});
