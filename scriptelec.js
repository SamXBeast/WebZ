let currentIndex = 0;
  const carouselWrapper = document.getElementById('image-carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function showImage(index) {
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextImage() {
    showImage(currentIndex + 1);
  }

  // Change slide every 3 seconds (adjust as needed)
  setInterval(nextImage, 3000);
