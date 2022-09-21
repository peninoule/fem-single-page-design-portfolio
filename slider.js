const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const nextButton = document.querySelector('.scroll__arrow--right');
const prevButton = document.querySelector('.scroll__arrow--left');

const slideWidth = slides[0].getBoundingClientRect().width + 'px';


// Click right, move to right
nextButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.slider__card--active');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = slideWidth;

    currentSlide.scrollTo({
        top: 0,
        left: 1,
        behavior: 'smooth'
    });
    //move to the next slide
    //slider.style.transform =  'translateX(-' + amountToMove +')';
    //currentSlide.classList.remove('slider__card--active');
    //nextSlide.classList.add('slider__card--active');

})

// Click left, move to left