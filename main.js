AOS.init();

/**********************************************
VARIABLES
***********************************************/
let header = document.querySelector(".menu-container");
let navLinks = document.querySelectorAll("nav ul li a");
let nav = document.querySelector("nav");
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

  navLinks.forEach((link) => {
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
BURGER MENU
***********************************************/
$(document).ready(function() {
  $(".navbar-burger").click(function(e) {
    $(".navbar-burger, #nav").toggleClass("active");
  })
});

/**********************************************
SLIDESHOW - ABOUT SECTION
***********************************************/
setInterval(changeColor, 1000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const mql = [
    "(max-width: 767px)",
    "(min-device-width: 560px) and (max-device-width: 823px) and (min-device-height: 320px) and (max-device-height: 420px) and (orientation: landscape)"
  ];
  
  if (window.matchMedia(mql).matches) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
  }
}

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