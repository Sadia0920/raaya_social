const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


// 8 card data
const cards = [
  { image: 'Images/video-image1.png', title: 'Health & Wealth' },
  { image: 'Images/video-image2.png', title: 'Financial services' },
  { image: 'Images/video-image3.png', title: 'Real estate' },
  { image: 'Images/video-image4.png', title: 'Home services' },
  { image: 'Images/video-image1.png', title: 'Health & Wealth' },
  { image: 'Images/video-image2.png', title: 'Financial services' },
  { image: 'Images/video-image3.png', title: 'Real estate' },
  { image: 'Images/video-image4.png', title: 'Home services' },
];

// Render cards
cards.forEach(card => {
  const cardEl = document.createElement('div');
  cardEl.className = 'slider-card';
  cardEl.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h3>${card.title}</h3>
  `;
  slider.appendChild(cardEl);
});

let currentIndex = 0;

function updateSlider() {
  const card = document.querySelector('.card');
  const cardWidth = card.offsetWidth + 20;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > cards.length - 4) { 
    currentIndex = 0;
  }
  updateSlider();
});

// prevBtn.addEventListener('click', () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = cards.length - 4;
//   }
//   updateSlider();
// });