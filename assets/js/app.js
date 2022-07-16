var body = document.body;

function Add() {
    var input = document.getElementById('input').value;
    var checkTime = input.substring(1, 2)
    var group = document.getElementById('group');
    if (checkTime === '1') {
        group.style.backgroundColor = 'yellow';
        group.style.color = 'black';
    }
    else if (checkTime === '2') {
        group.style.backgroundColor = 'red';
        group.style.color = 'white';
    }
    else if (checkTime === '3') {
        group.style.backgroundColor = 'black';
        group.style.color = 'white';
    }
    else {
        group.style.backgroundColor = 'green';
        group.style.color = 'white';
    }
    group.innerHTML = input;
}

function ChangeMode() {
    var icon = document.getElementById('icon');
    if(icon.innerHTML === '<i class="fa-solid fa-sun"></i>'){
        icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
        icon.style.backgroundColor = 'black';
        icon.style.color = 'white';
        body.style.color = '#333'
        body.style.backgroundColor = 'antiquewhite';
    }
    else{
        icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        icon.style.backgroundColor = 'antiquewhite';
        icon.style.color = 'black';
        body.style.color = 'antiquewhite'
        body.style.backgroundColor = 'rgb(28, 28, 28)';
    }
}