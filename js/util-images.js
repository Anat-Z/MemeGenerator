'use strict'

var gImages = [];

function createImg (src, desc) {
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
    img.src = 'img/1.jpg'
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
}

function filterImages(txt) {
    return gImages.filter(function (img) {
        return txt === img.desc
    });
}