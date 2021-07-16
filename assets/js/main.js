const mainNav = document.querySelector('.main-nav');
const openMenu = document.querySelector('.menuIcon');

// openMenu.addEventListener('click',function(){
//     if(mainNav.style.display = 'none'){
//         mainNav.style.display = 'flex';
//         mainNav.style.top = '0';
//     }else{
//         mainNav.style.display = 'none';
//         mainNav.style.top = '-100%';
//     }
    
// });
openMenu.addEventListener("click",mobileMenu);
function mobileMenu(){
    // openMenu.classList.toggle("active");
    mainNav.classList.toggle("active");
}

