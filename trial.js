document.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.hidden');

  elements.forEach(function(element) {
      const position = element.getBoundingClientRect();

      // Jika elemen muncul di viewport, tambahkan kelas 'visible'
      if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
      }
  });
});
