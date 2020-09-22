/**********************************************
INTRO CANVAS
***********************************************/
let w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById("intro-animated"),
  ctx = canvas.getContext("2d"),
  rate = 60,
  arc = 100,
  time,
  count,
  size = 10,
  speed = 8,
  parts = new Array(),
  colors = [
    "rgba(0, 0, 0, 0.5)",
    "rgba(249, 92, 109, 0.5)",
    "rgba(226, 219, 13, 0.5)",
    "rgba(130, 166, 162, 0.5)",
    "rgba(0, 0, 153, 0.5)",
  ];
let mouse = { x: 0, y: 0 };

canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

function create() {
  time = 0;
  count = 0;

  for (let i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size,
    };
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  canvas.addEventListener("mousemove", MouseMove, false);
  for (let i = 0; i < arc; i++) {
    let li = parts[i];
    let distanceFactor = DistanceBetween(mouse, parts[i]);
    distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle = li.c;
    if (i % 2 == 0) ctx.stroke();
    else ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }
  if (time < speed) {
    time++;
  }
  setTimeout(particles, 1000 / rate);
}
function MouseMove(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;

  //context.fillRect(e.layerX, e.layerY, 5, 5);
  //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
create();
particles();

/**********************************************
VARIABLES
***********************************************/
let header = document.querySelector(".menu-container");
let NavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");

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
