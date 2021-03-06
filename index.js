// xl, 2xl screen onhide on scroll navbar
let prevscroll = 0;
window.onscroll = function(){
    const currentScrollPos = window.pageYOffset;
    const nav = document.getElementById("navbar");
    if(currentScrollPos > prevscroll){
        nav.classList.remove("top-0");
        nav.classList.add("-top-20");
    }else{
        nav.classList.remove("-top-20");
        nav.classList.add("top-0");
    }
    prevscroll = currentScrollPos;
}