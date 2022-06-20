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
    mainListDiv.style.transition = "all 0.8s ease-in-out";
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
};
// je dois chercher comment annuler un backgroundcolor et un onclick

let icon = document.querySelector(".search");
let input = document.querySelector(" .inputsearch");
console.log(input);
icon.addEventListener("click", (e) => {
  e.preventDefault();
//   icon.style.display = "none";
  input.style.display = "block";
});

