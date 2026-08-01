// Dom Element Selectors
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Helper to switch the active image source
function showImage(index) {
  currentIndex = index;
  const newSrc = galleryImages[currentIndex].getAttribute('data-full');
  lightboxImg.src = newSrc;
}

// Open Lightbox on thumbnail click
galleryImages.forEach((img) => {
  img.addEventListener('click', (e) => {
    lightbox.classList.add('active');
    const index = parseInt(e.target.getAttribute('data-index'));
    showImage(index);
  });
});

// Next Button Handler (Looping logic)
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents backdrop click triggers
  let nextIndex = (currentIndex + 1) % galleryImages.length;
  showImage(nextIndex);
});

// Previous Button Handler (Looping logic)
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  let prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(prevIndex);
});

// Close UI Interactions
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
