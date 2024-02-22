const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
const search = document.querySelector("#search");
const searchPanel = document.querySelector(".search");
const searchClose = document.querySelector("#close");
const brightness = document.querySelector(".bright");

search.addEventListener("click", () => {
  searchPanel.style.transform = "translateY(0px)";
  searchPanel.style.display = "flex";
  brightness.style.filter = "blur(20px)";
});
searchClose.addEventListener("click", () => {
  searchPanel.style.display = "none";
  brightness.style.filter = "blur(0px)";
});

const InstaGallery = document.querySelectorAll("#insta");
const scroller = document.querySelector("#scroller");

InstaGallery.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    posX = e.screenX;
    posY = e.screenY;
    scroller.style.left = `${posX - 20}px `;
    scroller.style.top = `${posY - 120}px `;
  });
});
InstaGallery.forEach((item) => {
  item.addEventListener("mouseout", (e) => {});
});

const overlay = document.querySelector(".trans");
window.addEventListener("load", () => {
  overlay.style.height = "0px";
});

// slideshow
flag = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", () => {
  logic(-1);
});

next.addEventListener("click", () => {
  logic(1);
});

function logic(index) {
  flag = flag + index;
  slideshow(flag);
}
slideshow(flag);
function slideshow(num) {
  // console.log(num);
  const backSlides = document.querySelectorAll(".posterImg img");
  const frontSlides = document.querySelectorAll(".paddedImg img");
  const mainSlides = document.querySelectorAll(".slideImg img");
  const MainHeadlines = document.querySelectorAll(".slide p");
  const MainButton = document.querySelectorAll(".slide button");

  if (num == backSlides.length) {
    num = 0;
    flag = 0;
  }
  if (num < 0) {
    num = backSlides.length - 1;
    flag = backSlides.length - 1;
  }

  for (let x of backSlides) {
    x.style.display = "none";
  }
  for (let y of frontSlides) {
    y.style.display = "none";
  }
  for (let z of mainSlides) {
    z.style.display = "none";
  }

  for (let a of MainHeadlines) {
    a.style.display = "none";
  }
  for (let b of MainButton) {
    b.style.display = "none";
  }
  backSlides[num].style.display = "block";
  MainHeadlines[num].style.display = "block";
  MainButton[num].style.display = "block";

  frontSlides[num].style.display = "block";

  mainSlides[num].style.display = "block";
}

