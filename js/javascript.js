const menutoggle = document.getElementById('menubar');
const navlink = document.querySelector('.nav-links');

menutoggle.addEventListener('click', ()=>{
    navlink.classList.toggle('show')
    console.log("Menu Clicked");
    
})