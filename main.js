/**********************************************
VARIABLES
***********************************************/
let header = document.querySelector(".menu-container");
let NavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");
let text = document.getElementsByClassName("text-footer");
let footerColors = ["#fff", "#f95c6d", "#ff9e85", "#613b3b", "#49ada4", "#b3e6e0", "#436d6c"];

/**********************************************
STICKY MENU
***********************************************/
window.onscroll = function () {
  scrollFunction();
};

let sticky = header.offsetTop;

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/**********************************************
SCROLL ANIMATION
***********************************************/
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

/**********************************************
NAVBAR - ACTIVE ITEM
***********************************************/
window.addEventListener("scroll", (e) => {
  let fromTop = window.scrollY;

  NavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/**********************************************
FOOTER
***********************************************/
let i = 0;
function changeColor() {
  Array.from(text).forEach(el => {
    el.style.color = footerColors[i];
    i = (i + 1) % footerColors.length;
  });
}
setInterval(changeColor, 1000);
