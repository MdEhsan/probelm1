const firstInput = parseInt(document.querySelector('.first-input').value);
const secndInput = parseInt(document.querySelector('.secnd-input').value);
const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const multiBtn = document.querySelector('.multi-btn');
const divBtn = document.querySelector('.div-btn');
// const outPut = parseInt(document.querySelector('.result').value);



function add(){
    document.querySelector('.result').value = firstInput + secndInput
}



addBtn.addEventListener('click', add);

