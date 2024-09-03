const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const totalSlides = slides.length;
let slideInterval;

const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
};

const moveToSlide = (slideIndex) => {
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex);
    });
    currentSlide = slideIndex;
    updateIndicators();
};

const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    moveToSlide(nextIndex);
};

const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    moveToSlide(prevIndex);
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => moveToSlide(index));
});

const startSlideShow = () => {
    slideInterval = setInterval(nextSlide, 5000);
};

const stopSlideShow = () => {
    clearInterval(slideInterval);
};

carousel.addEventListener('mouseover', stopSlideShow);
carousel.addEventListener('mouseout', startSlideShow);

moveToSlide(currentSlide);
startSlideShow();
