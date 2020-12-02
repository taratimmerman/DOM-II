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
    this.classList.toggle('open-active');
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

// 5. Logo leave
const logo = document.querySelector('h1');
logo.addEventListener('mouseleave', function(event) {
    logo.style.color = "black";
});

// 6. Footer re-size
const footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    footer.style.fontSize = '2rem';
});

// 7. Wheel rotation
window.addEventListener('wheel', function() {
    console.log('the wheel is turning!');
});

// 8. Screen resize
window.addEventListener('resize', function() {
    console.log('the screen was resized!');
});

// 9. Content Pick Revert
destination.addEventListener('mouseout', function() {
    destination.style.color = 'white';
    button.style.color = 'white';
});

// 10. Link taunting
const nav = document.querySelector('.nav-link');
document.addEventListener('select', function(event) {
    if (event.target === nav) {
        console.log("be great if this did something");
    }
});

// STOPPING REFERESH
Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
      console.log(
        `disrupting the default behavior of "${event.target.textContent}"`
      );
      event.preventDefault();
    });
  });