const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const icon = item.querySelector('.toggle-icon');

  title.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all
    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.toggle-icon').textContent = '+';
    });

    // Toggle current
    if (!isActive) {
      item.classList.add('active');
      icon.textContent = '–';
    }
  });
});
