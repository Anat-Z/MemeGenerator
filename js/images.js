'use strict'


function drawImage() {
    var img = new Image()
    img.src = 'img/meme1.jpg'
    img.onload = function() {
        gCtx.drawImage(img, 0, 0 ,canvas.width, canvas.height)
    }
}