var box = document.querySelector('.box');
var symbol = 'O';

/*var proba = document.createElement('div');
 proba.className = "polje";
 gameTable.appendChild(proba);*/


function createtable() {
    var text = '';
    for (var i = 0; i < 9; i++) {
        text += '<div class="xo"></div>';

    }
    box.innerHTML = text;
}

createtable();

var boxes = document.querySelectorAll('.xo');

function listener(){
 for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', insertSymbol);

}   
}
listener();

function insertSymbol() {
    if (symbol === 'O') {
        symbol = 'X';
    } else {
        symbol = 'O';
    }
    this.innerHTML = symbol;
    checkLines();
}


function checkLines() {
    if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML
            && boxes[0].innerHTML !== '') {
        boxes[0].style.background = 'greenyellow';
        boxes[1].style.background = 'greenyellow';
        boxes[2].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);

    } else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML
            && boxes[3].innerHTML !== '') {
        boxes[3].style.background = 'greenyellow';
        boxes[4].style.background = 'greenyellow';
        boxes[5].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);

    } else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML
            && boxes[6].innerHTML !== '') {
        boxes[6].style.background = 'greenyellow';
        boxes[7].style.background = 'greenyellow';
        boxes[8].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
        
    } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML
            && boxes[0].innerHTML !== '') {
        boxes[0].style.background = 'greenyellow';
        boxes[3].style.background = 'greenyellow';
        boxes[6].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
    } else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML
            && boxes[1].innerHTML !== '') {
        boxes[1].style.background = 'greenyellow';
        boxes[4].style.background = 'greenyellow';
        boxes[7].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
    } else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML
            && boxes[2].innerHTML !== '') {
        boxes[2].style.background = 'greenyellow';
        boxes[5].style.background = 'greenyellow';
        boxes[8].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
    } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML
            && boxes[0].innerHTML !== '') {
        boxes[0].style.background = 'greenyellow';
        boxes[4].style.background = 'greenyellow';
        boxes[8].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
    } else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML
            && boxes[2].innerHTML !== '') {
        boxes[2].style.background = 'greenyellow';
        boxes[4].style.background = 'greenyellow';
        boxes[6].style.background = 'greenyellow';
        setTimeout(function (){
            createtable();
            boxes = document.querySelectorAll('.xo');
            listener();
        },1000);
    }


}


/*************************** DRUGIIIIIIIIII  NACIN
 
 let table = document.getElementsByClassName("table")[0];
let simbol = "o";

createTable();
function createTable() {
    let text = "<div class='field'></div>";
    for (var i = 0; i < 9; i++) {
        table.innerHTML += text;
    }
}

let field = document.querySelectorAll(".field");
for (var i = 0; i < field.length; i++) {
    field[i].addEventListener("click", insertSimbol);
}

function insertSimbol() {
    if (simbol === "o") {
        simbol = "x";
    } else {
        simbol = "o";
    }
    this.innerHTML = simbol;
    checkLines();
}

var lines = [
    [field[0], field[1], field[2]],
    [field[3], field[4], field[5]],
    [field[6], field[7], field[8]],
    [field[0], field[3], field[6]],
    [field[1], field[4], field[7]],
    [field[2], field[5], field[8]],
    [field[0], field[4], field[8]],
    [field[2], field[4], field[6]]
];

function checkLines() {
    for (var i = 0; i < lines.length; i++) {
        var crta = lines[i];
        if (crta[0].innerHTML === crta[1].innerHTML && crta[0].innerHTML === crta[2].innerHTML && crta[0].innerHTML !== "")
        {
            crta[0].style.background = 'greenyellow';
            crta[1].style.background = 'greenyellow';
            crta[2].style.background = 'greenyellow';
        }
    }
}
*/