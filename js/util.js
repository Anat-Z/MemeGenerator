'use strict'

//model - CRUDL for gImages

var gFontSize = '20px';
var gImages = [
    {
        id: 1,
        src: 'meme1.jpg',
        desc: 'you know...'
    }, {
        id: 2,
        src: 'meme2.jpg',
        desc: 'angry child'
    }, {
        id: 3,
        src: 'meme3.jpg',
        desc: 'celebration'
    }
];


function searchImage() {

}

function getImgidxById(imgId) {
    var img = gImages.find(function (img) {
        return img === img.id;
    })
    return img;
    
};

function onclickImg(img, id) {
    window.onclick = function () {
        var canvas = document.getElementById("canvas");
        gCtx = canvas.getContext("2d");
        img = document.getElementById(gImages);
        gCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}



