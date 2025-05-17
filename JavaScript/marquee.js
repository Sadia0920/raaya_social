const marqueeLogo = document.getElementById('marquee-logo');
let pos = marqueeLogo.offsetLeft;

function moveMarquee() {
  pos--;
  if (pos < -marqueeLogo.offsetWidth) {
    pos = marqueeLogo.parentElement.offsetWidth;
  }
  marqueeLogo.style.left = pos + 'px';
  requestAnimationFrame(moveMarquee);
}

moveMarquee();
