// slider photo
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;
let currentIndex = 0;
const images = slider.querySelectorAll('img');
const dots = document.querySelectorAll('.dot');

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

function setActiveDot(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

setActiveDot(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  slider.scrollLeft = currentIndex * slider.clientWidth;
  setActiveDot(currentIndex);
}, 2000);