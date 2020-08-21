const slidesContainer = document.querySelector('.slides-container');
console.log(slidesContainer);
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderNav = document.querySelector('.sliderNav');

let currentSlide = 0;
let slidesCount = slides.length;
let slideWidth = slides[0].clientWidth;

// Getting the correct img to be the first
(function init() {
    slides.forEach((img, i) => {
        img.style.left = `${i * 100}%`;
    })
}());

// Add the dots for sliderNav
for (let i = 0; i < slidesCount; i++) {
    let dot = document.createElement('div');
    dot.classList.add('single-dot');
    sliderNav.append(dot);

    dot.addEventListener('click', () => {
        goToSlide(i);
    })
}

// Set class active for the first dot
sliderNav.children[0].classList.add('active');

// Go to Slide function to navigate between the slides
function goToSlide(slideNumber){
    slidesContainer.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
    currentSlide = slideNumber;

    let currentDot = document.querySelector('.single-dot.active');
    currentDot.classList.remove('active');
    sliderNav.children[slideNumber].classList.add('active');
};

// Next Btn
nextBtn.addEventListener('click', () => {
    if (currentSlide >= slidesCount-1) {
        goToSlide(0);
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

// Prev Btn
prevBtn.addEventListener('click', () => {
    if (currentSlide <= 0) {
        goToSlide(slidesCount-1);
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

window.onresize = function(){
    slideWidth = slides[0].clientWidth;
    goToSlide(currentSlide);
};
