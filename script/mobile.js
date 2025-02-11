// CARD 1
let newX_1 = 0, newY_1  = 0, startX_1  = 0, startY_1  = 0;
let newX_2 = 0, newY_2  = 0, startX_2  = 0, startY_2  = 0;
let newX_3 = 0, newY_3  = 0, startX_3  = 0, startY_3  = 0;
let newX_4 = 0, newY_4  = 0, startX_4  = 0, startY_4  = 0;
let newX_5 = 0, newY_5  = 0, startX_5  = 0, startY_5  = 0;
let newX_6 = 0, newY_6  = 0, startX_6  = 0, startY_6  = 0;
let newX_7 = 0, newY_7  = 0, startX_7  = 0, startY_7  = 0;
let newX_8 = 0, newY_8  = 0, startX_8  = 0, startY_8  = 0;

const card_1 = document.getElementById('card_1');
const card_2 = document.getElementById('card_2');
const card_3 = document.getElementById('card_3');
const card_4 = document.getElementById('card_4');
const card_5 = document.getElementById('card_5');
const card_6 = document.getElementById('card_6');
const card_7 = document.getElementById('card_7');
const card_8 = document.getElementById('card_8');

card_1.addEventListener('touchstart', touchStart_1);
card_2.addEventListener('touchstart', touchStart_2);
card_3.addEventListener('touchstart', touchStart_3);
card_4.addEventListener('touchstart', touchStart_4);
card_5.addEventListener('touchstart', touchStart_5);
card_6.addEventListener('touchstart', touchStart_6);
card_7.addEventListener('touchstart', touchStart_7);
card_8.addEventListener('touchstart', touchStart_8);

function touchStart_1(e){
    startX_1 = e.touches[0].clientX;
    startY_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_1);
    document.addEventListener('touchend', touchEnd_1);
}

function touchStart_2(e){
    startX_2 = e.touches[0].clientX;
    startY_2 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_2);
    document.addEventListener('touchend', touchEnd_2);
}

function touchStart_3(e){
    startX_3 = e.touches[0].clientX;
    startY_3 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_3);
    document.addEventListener('touchend', touchEnd_3);
}

function touchStart_4(e){
    startX_4 = e.touches[0].clientX;
    startY_4 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_4);
    document.addEventListener('touchend', touchEnd_4);
}

function touchStart_5(e){
    startX_5 = e.touches[0].clientX;
    startY_5 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_5);
    document.addEventListener('touchend', touchEnd_5);
}

function touchStart_6(e){
    startX_6 = e.touches[0].clientX;
    startY_6 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_6);
    document.addEventListener('touchend', touchEnd_6);
}

function touchStart_7(e){
    startX_7 = e.touches[0].clientX;
    startY_7 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_7);
    document.addEventListener('touchend', touchEnd_7);
}

function touchStart_8(e){
    startX_8 = e.touches[0].clientX;
    startY_8 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_8);
    document.addEventListener('touchend', touchEnd_8);
}

function touchMove_1(e){
    newX_1 = startX_1 - e.touches[0].clientX;
    newY_1 = startY_1 - e.touches[0].clientY;

    startX_1 = e.touches[0].clientX;
    startY_1 = e.touches[0].clientY;

    card_1.style.top = (card_1.offsetTop - newY_1) + 'px';
    card_1.style.left = (card_1.offsetLeft - newX_1) + 'px';
}

function touchMove_2(e){
    newX_2 = startX_2 - e.touches[0].clientX;
    newY_2 = startY_2 - e.touches[0].clientY;

    startX_2 = e.touches[0].clientX;
    startY_2 = e.touches[0].clientY;

    card_2.style.top = (card_2.offsetTop - newY_2) + 'px';
    card_2.style.left = (card_2.offsetLeft - newX_2) + 'px';
}

function touchMove_3(e){
    newX_3 = startX_3 - e.touches[0].clientX;
    newY_3 = startY_3 - e.touches[0].clientY;

    startX_3 = e.touches[0].clientX;
    startY_3 = e.touches[0].clientY;

    card_3.style.top = (card_3.offsetTop - newY_3) + 'px';
    card_3.style.left = (card_3.offsetLeft - newX_3) + 'px';
}


function touchMove_4(e){
    newX_4 = startX_4 - e.touches[0].clientX;
    newY_4 = startY_4 - e.touches[0].clientY;

    startX_4 = e.touches[0].clientX;
    startY_4 = e.touches[0].clientY;

    card_4.style.top = (card_4.offsetTop - newY_4) + 'px';
    card_4.style.left = (card_4.offsetLeft - newX_4) + 'px';
}



function touchMove_5(e){
    newX_5 = startX_5 - e.touches[0].clientX;
    newY_5 = startY_5 - e.touches[0].clientY;

    startX_5 = e.touches[0].clientX;
    startY_5 = e.touches[0].clientY;

    card_5.style.top = (card_5.offsetTop - newY_5) + 'px';
    card_5.style.left = (card_5.offsetLeft - newX_5) + 'px';
}



function touchMove_6(e){
    newX_6 = startX_6 - e.touches[0].clientX;
    newY_6 = startY_6 - e.touches[0].clientY;

    startX_6 = e.touches[0].clientX;
    startY_6 = e.touches[0].clientY;

    card_6.style.top = (card_6.offsetTop - newY_6) + 'px';
    card_6.style.left = (card_6.offsetLeft - newX_6) + 'px';
}



function touchMove_7(e){
    newX_7 = startX_7 - e.touches[0].clientX;
    newY_7 = startY_7 - e.touches[0].clientY;

    startX_7 = e.touches[0].clientX;
    startY_7 = e.touches[0].clientY;

    card_7.style.top = (card_7.offsetTop - newY_7) + 'px';
    card_7.style.left = (card_7.offsetLeft - newX_7) + 'px';
}



function touchMove_8(e){
    newX_8 = startX_8 - e.touches[0].clientX;
    newY_8 = startY_8 - e.touches[0].clientY;

    startX_8 = e.touches[0].clientX;
    startY_8 = e.touches[0].clientY;

    card_8.style.top = (card_8.offsetTop - newY_8) + 'px';
    card_8.style.left = (card_8.offsetLeft - newX_8) + 'px';
}


function touchEnd_1(){
    document.removeEventListener('touchmove', touchMove_1);
    document.removeEventListener('touchend', touchEnd_1);
};

function touchEnd_2(){
    document.removeEventListener('touchmove', touchMove_2);
    document.removeEventListener('touchend', touchEnd_2);
};

function touchEnd_3(){
    document.removeEventListener('touchmove', touchMove_3);
    document.removeEventListener('touchend', touchEnd_3);
};


function touchEnd_4(){
    document.removeEventListener('touchmove', touchMove_4);
    document.removeEventListener('touchend', touchEnd_4);
};


function touchEnd_5(){
    document.removeEventListener('touchmove', touchMove_5);
    document.removeEventListener('touchend', touchEnd_5);
};


function touchEnd_6(){
    document.removeEventListener('touchmove', touchMove_6);
    document.removeEventListener('touchend', touchEnd_6);
};


function touchEnd_7(){
    document.removeEventListener('touchmove', touchMove_7);
    document.removeEventListener('touchend', touchEnd_7);
};


function touchEnd_8(){
    document.removeEventListener('touchmove', touchMove_8);
    document.removeEventListener('touchend', touchEnd_8);
};