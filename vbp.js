const toTop = document.querySelector(".toTop");
const arrow = document.querySelector('.arrow');
const navLinks = document.querySelectorAll('.side-nav-link');
toTop.addEventListener('click', topOfPage);
//click to go to top.
function topOfPage(e){
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Have button to top fade in.
window.onscroll = function() {showToTop()};

function showToTop() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      toTop.style.opacity = "1"
      arrow.style.opacity = "1"

      
    } else {
      toTop.style.opacity = "0";
      arrow.style.opacity = "0";
      
    }
  }
// side menu when using on mobile/tablet
const menu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.closebtn');
menu.addEventListener('click',openMenu);
closeMenu.addEventListener('click',closeSideMenu);

function openMenu(e){
document.querySelector('.side-nav').style.width='100%';

}

function closeSideMenu(e){
    document.querySelector('.side-nav').style.width="0";
    }
//Drop downs on the about me page
pq = document.getElementById('pqul');
pa = document.getElementById('paul');
document.getElementById('pq-btn').addEventListener('click', function(e){
pq.classList.toggle('show');
})
document.getElementById('pa-btn').addEventListener('click', function(e){
pa.classList.toggle('show');

})




