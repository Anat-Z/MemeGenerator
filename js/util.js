'use strict'

//model - CRUDL for gImages

var gFontSize = '20px';

function makeId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeShadow () {
    gCtx.shadowOffsetX = 3;
    gCtx.shadowOffsetX = 3;
    gCtx.shadowBlur = 4;
    gCtx.shadowColor = "rgba(0,0,0,0.3)"
}


function cancelShadow () {
    gCtx.shadowOffsetX = 0;
    gCtx.shadowOffsetX = 0;
    gCtx.shadowBlur = 0;
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}