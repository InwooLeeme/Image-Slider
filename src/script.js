
const firstSliderCard = document.querySelector('.card:first-child');

const SHOWING = `showing`;

function slider(){
    const currentCard = document.querySelector(`.${SHOWING}`);
    if(currentCard){
        currentCard.classList.remove(SHOWING);
        const nextSlideCard = currentCard.nextElementSibling;
        if(nextSlideCard){
            nextSlideCard.classList.add(SHOWING);
        }
        else{
            firstSliderCard.classList.remove(SHOWING);
        }
    }
    else{
        firstSliderCard.classList.add(SHOWING);
    }
}

function init(){
    window.addEventListener('click',slider);
}

init();