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


// let icon = document.querySelector(".search");
// let input = document.querySelector(" .inputsearch");

// icon.addEventListener("click", (e) => {
//   e.preventDefault();
//   input.classList.toggle("shownav_list");
//   // icon.classList.toggle("active");
  
//   // input.style.display = "block";

// });

function myfonction (){
  let input = document.querySelector(" .search-box input");
  input.classList.toggle("shownav_list");

}

