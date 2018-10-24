'use strict'

var gImages = [
    {
        id: 1,
        src: 'img/1.jpg',
        desc: 'Look at all the fucks I give'
    }
];

function createImages (src, desc) {
   var imageObj =  createImageObj (src,desc );
   gImages.push(imageObj);
}

function createImageObj (src, desc) {
    var id = makeId();
    return {id , src , desc}
}

function searchImage() {

}

function getImgidxById(imgId) {
    var imgIdx = gImages.findIndex(function (img) {
        return imgId === img.id;
    })
    return imgIdx;

};

function onclickImg(img) {
    gCurrMemeData.elImage = img;
    var canvas = document.getElementById("canvas");
    gCtx = canvas.getContext("2d");
    gCtx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function drawImage() {
    var img = new Image()
    img.src = 'img/meme1.jpg'
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
}

