const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.scroll__arrow--right');
const prevButton = document.querySelector('.scroll__arrow--left');

// Click right, move right
nextButton.onclick = function () {
    document.querySelector('.slider').scrollLeft += 300;
}

// Click left, move left
prevButton.onclick = function () {
    document.querySelector('.slider').scrollLeft -= 300;
}
