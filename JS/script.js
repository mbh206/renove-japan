
// resizes the header on scroll
window.onscroll = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("header-img").style.width = "85px";
    document.getElementById("header-img").style.height = "60px";
    document.getElementsByClassName("nav").style.height = "50px";
    document.getElementsByClassName("nav").style.marginTop = "2em";
    document.getElementsByClassName("menu-item").style.marginTop = "10px";

  } else {
    document.getElementById("header").style.height = "90px";
    document.getElementById("header-img").style.width = "110px";
    document.getElementById("header-img").style.height = "75px";
    document.getElementsByClassName("nav").style.height = "90px";
    document.getElementsByClassName("nav").style.marginTop = "4em";
    document.getElementsByClassName("menu-item").style.marginTop = "20px";
  }
}

// GALLERY CATEGORIES
function addClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("btn-container");
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function filterSelection(c) {
  let x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (let i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
filterSelection("all")

// GALLERY LIGHTBOX
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// VIDEO LIGHTBOX
function revealVideo(div,video_id) {
  const video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1';
  document.getElementById(div).style.display = 'block';
}

function hideVideo(div,video_id) {
  const video = document.getElementById(video_id).src;
  const cleaned = video.replace('&autoplay=1','');
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}