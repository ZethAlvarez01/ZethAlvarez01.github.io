// CARD 1
let newX_1_1 = 0, newY_1_1 = 0, startX_1_1  = 0, startY_1_1  = 0;
let newX_2_1 = 0, newY_2_1 = 0, startX_2_1  = 0, startY_2_1  = 0;
let newX_3_1 = 0, newY_3_1 = 0, startX_3_1  = 0, startY_3_1  = 0;
let newX_4_1 = 0, newY_4_1 = 0, startX_4_1  = 0, startY_4_1  = 0;
let newX_5_1 = 0, newY_5_1 = 0, startX_5_1  = 0, startY_5_1  = 0;
let newX_6_1 = 0, newY_6_1 = 0, startX_6_1  = 0, startY_6_1  = 0;
let newX_7_1 = 0, newY_7_1 = 0, startX_7_1  = 0, startY_7_1  = 0;
let newX_8_1 = 0, newY_8_1 = 0, startX_8_1  = 0, startY_8_1  = 0;

const card_1_1 = document.getElementById('card_1');
const card_2_1 = document.getElementById('card_2');
const card_3_1 = document.getElementById('card_3');
const card_4_1 = document.getElementById('card_4');
const card_5_1 = document.getElementById('card_5');
const card_6_1 = document.getElementById('card_6');
const card_7_1 = document.getElementById('card_7');
const card_8_1 = document.getElementById('card_8');

card_1_1.addEventListener('touchstart', touchStart_1);
card_2_1.addEventListener('touchstart', touchStart_2);
card_3_1.addEventListener('touchstart', touchStart_3);
card_4_1.addEventListener('touchstart', touchStart_4);
card_5_1.addEventListener('touchstart', touchStart_5);
card_6_1.addEventListener('touchstart', touchStart_6);
card_7_1.addEventListener('touchstart', touchStart_7);
card_8_1.addEventListener('touchstart', touchStart_8);

function touchStart_1(e){
    startX_1_1 = e.touches[0].clientX;
    startY_1_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_1);
    document.addEventListener('touchend', touchEnd_1);
}

function touchStart_2(e){
    startX_2_1 = e.touches[0].clientX;
    startY_2_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_2);
    document.addEventListener('touchend', touchEnd_2);
}

function touchStart_3(e){
    startX_3_1 = e.touches[0].clientX;
    startY_3_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_3);
    document.addEventListener('touchend', touchEnd_3);
}

function touchStart_4(e){
    startX_4_1 = e.touches[0].clientX;
    startY_4_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_4);
    document.addEventListener('touchend', touchEnd_4);
}

function touchStart_5(e){
    startX_5_1 = e.touches[0].clientX;
    startY_5_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_5);
    document.addEventListener('touchend', touchEnd_5);
}

function touchStart_6(e){
    startX_6_1 = e.touches[0].clientX;
    startY_6_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_6);
    document.addEventListener('touchend', touchEnd_6);
}

function touchStart_7(e){
    startX_7_1 = e.touches[0].clientX;
    startY_7_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_7);
    document.addEventListener('touchend', touchEnd_7);
}

function touchStart_8(e){
    startX_8_1 = e.touches[0].clientX;
    startY_8_1 = e.touches[0].clientY;

    document.addEventListener('touchmove', touchMove_8);
    document.addEventListener('touchend', touchEnd_8);
}

function touchMove_1(e){
    newX_1_1 = startX_1_1 - e.touches[0].clientX;
    newY_1_1 = startY_1_1 - e.touches[0].clientY;

    startX_1_1 = e.touches[0].clientX;
    startY_1_1 = e.touches[0].clientY;

    card_1_1.style.top = (card_1_1.offsetTop - newY_1_1) + 'px';
    card_1_1.style.left = (card_1_1.offsetLeft - newX_1_1) + 'px';
}

function touchMove_2(e){
    newX_2_1 = startX_2_1 - e.touches[0].clientX;
    newY_2_1 = startY_2_1 - e.touches[0].clientY;

    startX_2_1 = e.touches[0].clientX;
    startY_2_1 = e.touches[0].clientY;

    card_2_1.style.top = (card_2_1.offsetTop - newY_2_1) + 'px';
    card_2_1.style.left = (card_2_1.offsetLeft - newX_2_1) + 'px';
}

function touchMove_3(e){
    newX_3_1 = startX_3_1 - e.touches[0].clientX;
    newY_3_1 = startY_3_1 - e.touches[0].clientY;

    startX_3_1 = e.touches[0].clientX;
    startY_3_1 = e.touches[0].clientY;

    card_3_1.style.top = (card_3_1.offsetTop - newY_3_1) + 'px';
    card_3_1.style.left = (card_3_1.offsetLeft - newX_3_1) + 'px';
}


function touchMove_4(e){
    newX_4_1 = startX_4_1 - e.touches[0].clientX;
    newY_4_1 = startY_4_1 - e.touches[0].clientY;

    startX_4_1 = e.touches[0].clientX;
    startY_4_1 = e.touches[0].clientY;

    card_4_1.style.top = (card_4_1.offsetTop - newY_4_1) + 'px';
    card_4_1.style.left = (card_4_1.offsetLeft - newX_4_1) + 'px';
}



function touchMove_5(e){
    newX_5_1 = startX_5_1 - e.touches[0].clientX;
    newY_5_1 = startY_5_1 - e.touches[0].clientY;

    startX_5_1 = e.touches[0].clientX;
    startY_5_1 = e.touches[0].clientY;

    card_5_1.style.top = (card_5_1.offsetTop - newY_5_1) + 'px';
    card_5_1.style.left = (card_5_1.offsetLeft - newX_5_1) + 'px';
}



function touchMove_6(e){
    newX_6_1 = startX_6_1 - e.touches[0].clientX;
    newY_6_1 = startY_6_1 - e.touches[0].clientY;

    startX_6_1 = e.touches[0].clientX;
    startY_6_1 = e.touches[0].clientY;

    card_6_1.style.top = (card_6_1.offsetTop - newY_6_1) + 'px';
    card_6_1.style.left = (card_6_1.offsetLeft - newX_6_1) + 'px';
}



function touchMove_7(e){
    newX_7_1 = startX_7_1 - e.touches[0].clientX;
    newY_7_1 = startY_7_1 - e.touches[0].clientY;

    startX_7_1 = e.touches[0].clientX;
    startY_7_1 = e.touches[0].clientY;

    card_7_1.style.top = (card_7_1.offsetTop - newY_7_1) + 'px';
    card_7_1.style.left = (card_7_1.offsetLeft - newX_7_1) + 'px';
}



function touchMove_8(e){
    newX_8_1 = startX_8_1 - e.touches[0].clientX;
    newY_8_1 = startY_8_1 - e.touches[0].clientY;

    startX_8_1 = e.touches[0].clientX;
    startY_8_1 = e.touches[0].clientY;

    card_8_1.style.top = (card_8_1.offsetTop - newY_8_1) + 'px';
    card_8_1.style.left = (card_8_1.offsetLeft - newX_8_1) + 'px';
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