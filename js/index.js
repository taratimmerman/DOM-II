// Your code goes here

// 1. Page Load
const yellow = document.querySelector('.introText');
window.addEventListener('load', function() {
    yellow.classList.add('loaded');
});

// 2. Middle Sliders
const contentSection = document.querySelectorAll('.text-content');

function toggleOpen() {
    this.classList.toggle('open');
};

function toggleActive(event) {
    if (event.propertyName.inlcludes('flex')) {
        this.classList.toggle('open-active');
    }
};

contentSection.forEach(slider => slider.addEventListener('mouseenter', toggleOpen));
contentSection.forEach(slider => slider.addEventListener('mouseenter', toggleActive));

// 3. Destination fade
const destinationImg = document.querySelector('.content-destination');
destinationImg.addEventListener('dblclick', function (event) {
    this.classList.toggle('active');
});

// 4. Content Pick
const destination = document.querySelector('.destination');
const button = document.querySelector('.btn');
destination.addEventListener('mousemove', function() {
    destination.style.color = '#feb849';
    button.style.color = 'black';
});

// 5. Logo select
const logo = document.querySelector('h1');
logo.addEventListener('mouseleave', function(event) {
    logo.style.color = "black";
});

// 6. Footer re-size
const footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    footer.style.fontSize = '2rem';
});