/* SMOOTH SCROLL */
function scrollToSection(id) {
document.getElementById(id).scrollIntoView({
behavior: "smooth",
block: "start"
});
}

/* RUN AFTER PAGE LOAD */
window.onload = function() {

/* DROPDOWN HOVER ANIMATION */
document.querySelectorAll(".dropdown").forEach(dropdown => {

```
const menu = dropdown.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseenter", () => {
  gsap.to(menu, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    pointerEvents: "auto"
  });
});

dropdown.addEventListener("mouseleave", () => {
  gsap.to(menu, {
    opacity: 0,
    y: 10,
    duration: 0.25,
    pointerEvents: "none"
  });
});
```

});

/* VIDEO HOVER PREVIEW (only if using <video>) */
document.querySelectorAll(".video-card").forEach(card => {

```
const video = card.querySelector("video");

card.addEventListener("mouseenter", () => {
  video.play();
});

card.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0;
});
```

});

/* SCROLL ANIMATIONS */
gsap.utils.toArray(".section, .hero-text, .hero-image").forEach(section => {

```
gsap.from(section, {
  opacity: 0,
  y: 80,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: section,
    start: "top 80%"
  }

});
```

});

};

/* CURSOR GLOW FOLLOW */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

if(!glow) return;

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

/* GRAPHICS GALLERY */

const images = document.querySelectorAll(".graphics-collage img");

const viewer = document.getElementById("galleryViewer");

const viewerImg = document.getElementById("galleryImage");

let currentIndex = 0;


function openGallery(index){

currentIndex = index;

viewer.classList.add("active");

viewerImg.src = images[index].src;

}


function closeGallery(){

viewer.classList.remove("active");

}


function nextImage(){

currentIndex++;

if(currentIndex >= images.length) currentIndex = 0;

viewerImg.src = images[currentIndex].src;

}


function prevImage(){

currentIndex--;

if(currentIndex < 0) currentIndex = images.length - 1;

viewerImg.src = images[currentIndex].src;

}


/* KEYBOARD CONTROLS */

document.addEventListener("keydown",function(e){

if(!viewer.classList.contains("active")) return;

if(e.key === "ArrowRight") nextImage();

if(e.key === "ArrowLeft") prevImage();

if(e.key === "Escape") closeGallery();

});
