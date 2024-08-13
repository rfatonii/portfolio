document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.hidden');

        elements.forEach(function(element) {
            const position = element.getBoundingClientRect();

            // Debugging
            console.log('Element position:', position.top);

            // Jika elemen muncul di viewport, tambahkan kelas 'visible'
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
                console.log('Visible class added'); // Debugging
            } else {
                element.classList.remove('visible');
                console.log('Visible class removed'); // Debugging
            }
        });
    });
});