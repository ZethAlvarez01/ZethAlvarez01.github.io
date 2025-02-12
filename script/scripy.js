// CARD 1
let newX_1 = 0, newY_1  = 0, startX_1  = 0, startY_1  = 0;
let newX_2 = 0, newY_2  = 0, startX_2  = 0, startY_2  = 0;
let newX_3 = 0, newY_3  = 0, startX_3  = 0, startY_3  = 0;
let newX_4 = 0, newY_4  = 0, startX_4  = 0, startY_4  = 0;
let newX_5 = 0, newY_5  = 0, startX_5  = 0, startY_5  = 0;
let newX_6 = 0, newY_6  = 0, startX_6  = 0, startY_6  = 0;
let newX_7 = 0, newY_7  = 0, startX_7  = 0, startY_7  = 0;
let newX_8 = 0, newY_8  = 0, startX_8  = 0, startY_8  = 0;


const card_1 = document.getElementById('card_1')
const card_2 = document.getElementById('card_2')
const card_3 = document.getElementById('card_3')
const card_4 = document.getElementById('card_4')
const card_5 = document.getElementById('card_5')
const card_6 = document.getElementById('card_6')
const card_7 = document.getElementById('card_7')
const card_8 = document.getElementById('card_8')

card_1.addEventListener('touchstart', touchStart);

card_1.addEventListener('mousedown', mouseDown_1)
card_2.addEventListener('mousedown', mouseDown_2)
card_3.addEventListener('mousedown', mouseDown_3)
card_4.addEventListener('mousedown', mouseDown_4)
card_5.addEventListener('mousedown', mouseDown_5)
card_6.addEventListener('mousedown', mouseDown_6)
card_7.addEventListener('mousedown', mouseDown_7)
card_8.addEventListener('mousedown', mouseDown_8)


function mouseDown_1(e){
    startX_1 = e.clientX
    startY_1 = e.clientY

    card_1.style.zIndex = 999
    card_2.style.zIndex = 998
    card_3.style.zIndex = 997
    card_4.style.zIndex = 996
    card_5.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_1)
    document.addEventListener('mouseup', mouseUp_1)
}

function mouseDown_2(e){
    startX_2 = e.clientX
    startY_2 = e.clientY

    card_2.style.zIndex = 999
    card_1.style.zIndex = 998
    card_3.style.zIndex = 997
    card_4.style.zIndex = 996
    card_5.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_2)
    document.addEventListener('mouseup', mouseUp_2)
}

function mouseDown_3(e){
    startX_3 = e.clientX
    startY_3 = e.clientY

    card_3.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_4.style.zIndex = 996
    card_5.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_3)
    document.addEventListener('mouseup', mouseUp_3)
}

function mouseDown_4(e){
    startX_4 = e.clientX
    startY_4 = e.clientY

    card_4.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_3.style.zIndex = 996
    card_5.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_4)
    document.addEventListener('mouseup', mouseUp_4)
}

function mouseDown_5(e){
    startX_5 = e.clientX
    startY_5 = e.clientY

    card_5.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_4.style.zIndex = 996
    card_3.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_5)
    document.addEventListener('mouseup', mouseUp_5)
}

function mouseDown_6(e){
    startX_6 = e.clientX
    startY_6 = e.clientY

    card_6.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_4.style.zIndex = 996
    card_5.style.zIndex = 995
    card_3.style.zIndex = 994
    card_7.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_6)
    document.addEventListener('mouseup', mouseUp_6)
}

function mouseDown_7(e){
    startX_7 = e.clientX
    startY_7 = e.clientY

    card_7.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_4.style.zIndex = 996
    card_3.style.zIndex = 995
    card_5.style.zIndex = 994
    card_6.style.zIndex = 993
    card_8.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_7)
    document.addEventListener('mouseup', mouseUp_7)
}

function mouseDown_8(e){
    startX_8 = e.clientX
    startY_8 = e.clientY

    card_8.style.zIndex = 999
    card_2.style.zIndex = 998
    card_1.style.zIndex = 997
    card_4.style.zIndex = 996
    card_3.style.zIndex = 995
    card_6.style.zIndex = 994
    card_7.style.zIndex = 993
    card_5.style.zIndex = 991

    document.addEventListener('mousemove', mouseMove_8)
    document.addEventListener('mouseup', mouseUp_8)
}



function mouseMove_1(e){
    newX_1 = startX_1 - e.clientX 
    newY_1 = startY_1 - e.clientY 
  
    startX_1 = e.clientX
    startY_1 = e.clientY

    card_1.style.top = (card_1.offsetTop - newY_1) + 'px'
    card_1.style.left = (card_1.offsetLeft - newX_1) + 'px'
}

function mouseMove_2(e){
    newX_2 = startX_2 - e.clientX 
    newY_2 = startY_2 - e.clientY 
  
    startX_2 = e.clientX
    startY_2 = e.clientY

    card_2.style.top = (card_2.offsetTop - newY_2) + 'px'
    card_2.style.left = (card_2.offsetLeft - newX_2) + 'px'
}

function mouseMove_3(e){
    newX_3 = startX_3 - e.clientX 
    newY_3 = startY_3 - e.clientY 
  
    startX_3 = e.clientX
    startY_3 = e.clientY

    card_3.style.top = (card_3.offsetTop - newY_3) + 'px'
    card_3.style.left = (card_3.offsetLeft - newX_3) + 'px'
}

function mouseMove_4(e){
    newX_4 = startX_4 - e.clientX 
    newY_4 = startY_4 - e.clientY 
  
    startX_4 = e.clientX
    startY_4 = e.clientY

    card_4.style.top = (card_4.offsetTop - newY_4) + 'px'
    card_4.style.left = (card_4.offsetLeft - newX_4) + 'px'
}

function mouseMove_5(e){
    newX_5 = startX_5 - e.clientX 
    newY_5 = startY_5 - e.clientY 
  
    startX_5 = e.clientX
    startY_5 = e.clientY

    card_5.style.top = (card_5.offsetTop - newY_5) + 'px'
    card_5.style.left = (card_5.offsetLeft - newX_5) + 'px'
}

function mouseMove_6(e){
    newX_6 = startX_6 - e.clientX 
    newY_6 = startY_6 - e.clientY 
  
    startX_6 = e.clientX
    startY_6 = e.clientY

    card_6.style.top = (card_6.offsetTop - newY_6) + 'px'
    card_6.style.left = (card_6.offsetLeft - newX_6) + 'px'
}

function mouseMove_7(e){
    newX_7 = startX_7 - e.clientX 
    newY_7 = startY_7 - e.clientY 
  
    startX_7 = e.clientX
    startY_7 = e.clientY

    card_7.style.top = (card_7.offsetTop - newY_7) + 'px'
    card_7.style.left = (card_7.offsetLeft - newX_7) + 'px'
}


function mouseMove_8(e){
    newX_8 = startX_8 - e.clientX 
    newY_8 = startY_8 - e.clientY 
  
    startX_8 = e.clientX
    startY_8 = e.clientY

    card_8.style.top = (card_8.offsetTop - newY_8) + 'px'
    card_8.style.left = (card_8.offsetLeft - newX_8) + 'px'
}


function mouseUp_1(e){
    document.removeEventListener('mousemove', mouseMove_1)
}

function mouseUp_2(e){
    document.removeEventListener('mousemove', mouseMove_2)
}

function mouseUp_3(e){
    document.removeEventListener('mousemove', mouseMove_3)
}

function mouseUp_4(e){
    document.removeEventListener('mousemove', mouseMove_4)
}

function mouseUp_5(e){
    document.removeEventListener('mousemove', mouseMove_5)
}

function mouseUp_6(e){
    document.removeEventListener('mousemove', mouseMove_6)
}

function mouseUp_7(e){
    document.removeEventListener('mousemove', mouseMove_7)
}

function mouseUp_8(e){
    document.removeEventListener('mousemove', mouseMove_8)
}



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


function aparecer(){
    
    let imagen = document.getElementById('imagen_kitty')
    let carta = document.getElementById('carta_kitty')
    let centar = document.getElementById('centar')
    let text = document.getElementsByClassName('texto_aparecer')

    let card_1 = document.getElementById('card_1')
    let card_2 = document.getElementById('card_2')
    let card_3 = document.getElementById('card_3')
    let card_4 = document.getElementById('card_4')
    let card_5 = document.getElementById('card_5')
    let card_6 = document.getElementById('card_6')
    let card_7 = document.getElementById('card_7')
    let card_8 = document.getElementById('card_8')

    card_1.style.display = 'none'
    card_2.style.display = 'none'
    card_3.style.display = 'none'
    card_4.style.display = 'none'
    card_5.style.display = 'none'
    card_6.style.display = 'none'
    card_7.style.display = 'none'
    card_8.style.display = 'none'

    text[0].style.display = 'none'
    text[1].style.display = 'none'


    imagen.style.display = 'block'
    carta.style.display = 'block'
    centar.style.display = 'flex'
}


function boton_no(){

    nos = ['NO :(']

    let si = document.getElementById('si')
    let sip = document.getElementById('psi')
    let nop = document.getElementById('pno')
    let no = document.getElementById('no')

    var positionInfo = si.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;


    var positionInfo = no.getBoundingClientRect();
    var height_no = positionInfo.height;
    var width_no = positionInfo.width;

    si.style.width = (width + 10) + 'px'
    si.style.height = (height + 10) + 'px'
    sip.style.fontSize = (parseFloat(window.getComputedStyle(document.getElementById("psi")).fontSize) + 5) + 'px';

    no.style.width = (width_no - 6) + 'px'
    no.style.height = (height_no - 6) + 'px'
    nop.style.fontSize = (parseFloat(window.getComputedStyle(document.getElementById("pno")).fontSize) - 2) + 'px';


    nop.innerHTML = nos[0]
}

