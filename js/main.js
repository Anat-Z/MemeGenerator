'use strict'

//controller for eventhandlers and comm with the DOM

var gCanvas;
var gCtx;
var gCurrMemeData = {txt: '',
textcolor: 'black',
textsize: 20,};



function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'black';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    drawImage();
}

function setColor (color) {
    gCtx.strokeStyle = color
}

function onSaveImage() {

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
    elLink.href = canvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

function onChangedText(txt) {
    gCtx.fillStyle = 'black'
    gCtx.font = '50px Arial'
    gCtx.fillText(txt, 100, 100)
}

function changeFontSize (sign) {
    if (sign === 'minus') {gCurrMemeData.textsize--}
    else if (sign ==='plus') {gCurrMemeData.textsize++}
}