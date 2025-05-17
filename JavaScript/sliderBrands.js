const slider2 = document.getElementById('slider2');
const nextBtn2 = document.getElementById('nextBtn2');
const prevBtn2 = document.getElementById('prevBtn2');

// 8 card data
const brandsCards = [
  { image: 'Images/brands-image1.png', title: 'Health & Wealth' },
  { image: 'Images/brands-image2.png', title: 'Financial services' },
  { image: 'Images/brands-image3.png', title: 'Real estate' },
  { image: 'Images/brands-image4.png', title: 'Home services' },
  { image: 'Images/brands-image1.png', title: 'Health & Wealth' },
  { image: 'Images/brands-image2.png', title: 'Financial services' },
  { image: 'Images/brands-image3.png', title: 'Real estate' },
  { image: 'Images/brands-image4.png', title: 'Home services' },
];

// Render cards
brandsCards.forEach(card => {
  const cardEl = document.createElement('div');
  cardEl.className = 'slider-card';
  cardEl.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h3>${card.title}</h3>
  `;
  slider2.appendChild(cardEl);
});

let brandscurrentIndex = 0;

function brandsupdateSlider() {
  const brandCard = document.querySelector('.card');
  const cardWidth = brandCard.offsetWidth + 20;
  slider2.style.transform = `translateX(-${brandscurrentIndex * cardWidth}px)`;
}

nextBtn2.addEventListener('click', () => {
  brandscurrentIndex++;
  if (brandscurrentIndex > brandsCards.length - 4) { 
    brandscurrentIndex = 0;
  }
  brandsupdateSlider();
});

// prevBtn2.addEventListener('click', () => {
//   brandscurrentIndex--;
//   if (brandscurrentIndex < 0) {
//     brandscurrentIndex = brandsCards.length - 4;
//   }
//   brandsupdateSlider();
// });