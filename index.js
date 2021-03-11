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

const clickHam = () =>{
    const nav = document.getElementById("responsive-navbar");
    const screen_overlay = document.getElementById("screen-overlay");

    if(nav.classList.contains("hide-nav")){
        nav.classList.remove("hide-nav");
        nav.classList.add("show-nav");
    }else{
        nav.classList.remove("show-nav");
        nav.classList.add("hide-nav");
    }

    if(document.body.classList.contains("pause")){
        document.body.classList.remove("pause");
    }else{
        document.body.classList.add("pause");
    }

    if(screen_overlay.classList.contains("opacity-0")){
        screen_overlay.classList.remove("opacity-0");
        screen_overlay.classList.add("opacity-50");

    }else{
        screen_overlay.classList.remove("opacity-50");
        screen_overlay.classList.add("opacity-0");
    }
}

const clickOverlay = () =>{
    
}