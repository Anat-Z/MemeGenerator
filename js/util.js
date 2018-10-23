'use strict'

//model - CRUDL for gImages

var gFontSize = '20px';


function renderImages() {

    var strHtml = `<ul>`

    gImages.forEach(function (img) {
        strHtml += `   
    <li> <img class="img" src="${img.src}" onclick="onclickImg(this, ${img.id})"></li>
    
     ` ;
    })

    strHtml += ` 
</ul>`

    var elImages = document.querySelector('.images-cards')
    elImages.innerHTML = strHtml;
}

