'use strict';
// Задача 1
function buttonClick1(){
    var elem1 = document.getElementById('elem1');
    elem1.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

// Задача 2
function buttonClick2(){
    let elem2 = document.getElementById('elem2');
    elem2.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}

// Задча 3
function buttonClick3(){
    let elem3 = document.getElementById('elem3')
    elem3.outerHTML = '<h3>' + elem3.innerHTML + '</h3>';
}

// Задача 4
function yep(){
    var input1 = +document.getElementById('input1').value;
    var input2 = +document.getElementById('input2').value;
    var result = document.getElementById('result');
    result.innerHTML = input1 + input2;
}

// Задача 5
function yep2(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}
