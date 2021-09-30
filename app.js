const firstInput = document.querySelector('.first-input');
const secndInput = document.querySelector('.secnd-input');
const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const multiBtn = document.querySelector('.multi-btn');
const divBtn = document.querySelector('.div-btn');
const outPut = document.querySelector('.result');

// Addition Function

function add(){
    outPut.value = parseInt(firstInput.value) + parseInt(secndInput.value)
}

addBtn.addEventListener('click', add);


// Subtraction function

function sub(){
    outPut.value = parseInt(firstInput.value) - parseInt(secndInput.value)
}

subBtn.addEventListener('click' , sub);

// Multiplication Function

function multi(){
    outPut.value = parseInt(firstInput.value) * parseInt(secndInput.value)
}

multiBtn.addEventListener('click' , multi);

// Division Function

function divide(){
    outPut.value = parseInt(firstInput.value) / parseInt(secndInput.value)
}

divBtn.addEventListener('click' , divide);


