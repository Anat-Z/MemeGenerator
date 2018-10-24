'use strict'

//controller for eventhandlers and comm with the DOM

var gCanvas;
var gCtx;
var gCurrMemeData = {
    txt: '',
    textcolor: 'black',
    textsize: 50,
    elImage: '',
};



function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'black';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    // drawImage();
    createImages('img/2.jpg', 'Trump');
    createImages('img/3.jpg', 'Cute dogs')
    renderImages();
}


function renderImages() {

    var strHtml = `<ul>`

    gImages.forEach(function (img) {
        strHtml += `   
    <li> <img class="img" src="${img.src}" 
    onclick="onclickImg(this, '${img.id}')"></li>
     ` ;
    })

    strHtml += ` 
</ul>`

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
    gCtx.fillText(gCurrMemeData.txt, 50, 40)
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

function onChangedText(txt) {
    gCurrMemeData.txt = txt
   updateCanvas()
}

function changeFontSize(sign) {
    if (sign === 'minus') { gCurrMemeData.textsize += -4 }
    else if (sign === 'plus') { gCurrMemeData.textsize += 4 }
    updateCanvas();
}

