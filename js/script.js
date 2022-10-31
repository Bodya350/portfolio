document.querySelector(".header__burger").onclick = () => {
   document.querySelector(".header__menu").classList.toggle("show");
   document.querySelector(".header__burger").classList.toggle("show");
 };

document.querySelector(".footer_arrow").onclick = () => {
 document.querySelector(".footer_arrow").classList.toggle("show");
 document.querySelector(".footer_info_body").classList.toggle("show");
}
// __________

window.onscroll = function() {scrollFunction()};


document.querySelector('.btn_scroll_top').onclick = () => {
   document.documentElement.scrollTop = 0;
}
