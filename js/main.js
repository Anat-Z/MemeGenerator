'use strict'

//controller for eventhandlers and comm with the DOM

var gCanvas;
var gCtx;
var gCurrMemeData ={
    txt1: '',
    txt2: '',
    textcolor: 'white',
    textsize: 50,
    elImage: ''
};



function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'white';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    // drawImage();
    createImg('img/2.jpg', 'Trump')
    createImg('img/3.jpg', 'Cute dogs')
    createImg('img/4.jpg', 'Baby and dog sleeping')
    createImg('img/5.jpg', 'punch baby')
    createImg('img/6.jpg', 'sleeping keyboard cat')
    createImg('img/7.jpg', 'Cute dogs')
    createImg('img/8.jpg', 'Cute dogs')
    createImg('img/9.jpg', 'Cute dogs')
    createImg('img/10.jpg', 'Cute dogs')
    createImg('img/11.jpg', 'Cute dogs')
    createImg('img/12.jpg', 'Cute dogs')
    createImg('img/13.jpg', 'Cute dogs')
    createImg('img/14.jpg', 'Cute dogs')
    createImg('img/15.jpg', 'Cute dogs')
    createImg('img/16.jpg', 'Cute dogs')
    createImg('img/17.jpg', 'Dancing baby in Africa')
    createImg('img/18.jpg', 'Trump finger')
    createImg('img/19.jpg', 'yelling crazy eyes dude')
    createImg('img/20.jpg', 'surprised caught baby')
    createImg('img/21.jpg', 'stretching dog')
    createImg('img/22.jpg', 'Obama laughing how cute')
    createImg('img/23.jpg', 'boxers')
    createImg('img/24.jpg', 'Oprah: you get a car!')
    renderImages();
}



function renderImages() {

    var strHtml = `<ul>`

    gImages.forEach(function (img) {
        strHtml += `   
     <div class="wrap"> <div class="crop"> <li> <img class="img" src="${img.src}" 
    onclick="onclickImg(this, '${img.id}')"></li> </div> </div> 
     ` ;
    })

    strHtml += ` 
    </div> </ul> `

    var elImages = document.querySelector('.images-cards')
    elImages.innerHTML = strHtml;
}



function setColor(color) {
    gCtx.strokeStyle = color;
    gCurrMemeData.textcolor = color;
    updateCanvas();
}

function updateCanvas () {
    gCtx.drawImage(gCurrMemeData.elImage, 0, 0, canvas.width, canvas.height)
    gCtx.fillStyle = gCurrMemeData.textcolor
    var textProperties = gCurrMemeData.textsize + 'px Roboto'
    gCtx.font = textProperties
    gCtx.fillText(gCurrMemeData.txt1, 50, 40)
    gCtx.fillText(gCurrMemeData.txt2, 50, 370)
    
}

function clearCanvas() {
    gCtx = null;
    gCtx = gCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = 'lightgray';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    gPosRec = null;
}

function saveCanvas(elLink) {
    console.log(elLink)
    elLink.href = canvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

function firstMemeText(txt) {
    gCurrMemeData.txt1 = txt
   updateCanvas()
}

function secondMemeText(txt) {
    gCurrMemeData.txt2 = txt
    updateCanvas()
}

function changeFontSize(sign) {
    if (sign === 'minus') { gCurrMemeData.textsize += -4 }
    else if (sign === 'plus') { gCurrMemeData.textsize += 4 }
    updateCanvas();
}

