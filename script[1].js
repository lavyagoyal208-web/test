const themeBtn=document.getElementById('themeBtn');
const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');

themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
});

menuBtn.addEventListener('click',()=>navMenu.classList.toggle('show'));

document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',()=>navMenu.classList.remove('show'));
});
