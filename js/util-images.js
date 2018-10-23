'use strict'

var gImages = [
    {
        id: 1,
        src: 'img/meme1.jpg',
        desc: 'you know...'
    }, {
        id: 2,
        src: 'img/meme2.jpg',
        desc: 'angry child'
    }, {
        id: 3,
        src: 'img/meme3.jpg',
        desc: 'celebration'
    }
];


function searchImage() {

}

function getImgidxById(imgId) {
    var imgIdx = gImages.findIndex(function (img) {
        return imgIdx === img.id;
    })
    return imgIdx;

};

function onclickImg(img, id) {
    var canvas = document.getElementById("canvas");
    gCtx = canvas.getContext("2d");
    console.log(img)
    // img.onload = function() {
        gCtx.drawImage(img, 0, 0 ,canvas.width, canvas.height)
    // }

}


function drawImage() {  
    var img = new Image()
    img.src = 'img/meme1.jpg'
    img.onload = function() {
        gCtx.drawImage(img, 0, 0 ,canvas.width, canvas.height)
    }
}

