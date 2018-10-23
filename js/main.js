'use strict'

//controller for eventhandlers and comm with the DOM

var gCanvas;
var gCtx;



function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'lightgray';
    gCtx.strokeStyle = 'black';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
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
    ctx.fillStyle = 'black'
    ctx.font = '50px Arial'
    ctx.fillText(txt, 100, 100)
}

function changeFontSize (sign) {
    if (sign === 'minus') {gFontSize--}
    else if (sign ==='plus') {gFontSize++}
    console.log (gFontSize)
}