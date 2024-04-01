const menuBtn=document.querySelector('.fa-bars');
const closeBtn=document.querySelector('fa-times');
const navlist=document.querySelector('.navlist');
 menuBtn.addEventListener('click',()=>{
    navlist.style.width='250px';
 })
 closeBtn.addEventListener('click',()=>{
    navlist.style.width=0;
 })