// Your code goes here


// Middle Sliders
const contentSection = document.querySelectorAll('.text-content');

function toggleOpen() {
    this.classList.toggle('open');
};

function toggleActive(event) {
    if (event.propertyName.inlcludes('flex')) {
        this.classList.toggle('open-active');
    }
};

contentSection.forEach(slider => slider.addEventListener('click', toggleOpen));
contentSection.forEach(slider => slider.addEventListener('click', toggleActive));

// Destination fade
const destination = document.querySelector('.content-destination');
destination.addEventListener('dblclick', function (event) {
    this.classList.toggle('active');
});