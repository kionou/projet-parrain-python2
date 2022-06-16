window.addEventListener('scroll', function() {
    let header = document.querySelector('.nav');
    let windowPosition = window.pageYOffset > 600 ;
    header.classList.toggle('scrolling-active', windowPosition);    
        
})

let mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton"),
navbar = document.querySelector('.nav');

mediaButton.onclick = function () {
    "use strict";
    navbar.classList.toggle("shownav_list");
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
};
// je dois chercher comment annuler un backgroundcolor et un onclick

