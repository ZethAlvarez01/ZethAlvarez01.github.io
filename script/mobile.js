
let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card_1');

card.addEventListener('mousedown', mouseDown);
card.addEventListener('touchstart', touchStart);

function touchStart(e){
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);
}

function touchMove(e){
    newX = startX - e.touches[0].clientX;
    newY = startY - e.touches[0].clientY;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';
}

function touchEnd(){
    document.removeEventListener('touchmove', touchMove);
    document.removeEventListener('touchend', touchEnd);
};