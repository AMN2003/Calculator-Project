let display = document.getElementById('display');
let currentValue = "";
let secondValue = "";
let enteringSecond = false;
let operator = "";
let result;

const clearing = document.getElementById('clear');
clearing.addEventListener("click", clear)

function clear(){
    currentValue = ""; 
    secondValue = "";
    operator = "";
    enteringSecond = false;
    display.textContent = "";
    
}
const numberdButtons = document.querySelectorAll('.number-buttons');

numberdButtons.forEach(button => {
    button.addEventListener("click", () =>{
        appendNumber(button.value);
     }
     )
})

function appendNumber(number){    
    if(!enteringSecond){
        currentValue += number;
        display.textContent = currentValue;
    }
    else{
        secondValue += number;
        display.textContent = secondValue;
    }
}

document.getElementById('add').addEventListener('click', ()=>{
    operator = "+";
    enteringSecond = true;
})

document.getElementById('minus').addEventListener('click', ()=>{
    operator = "-";
    enteringSecond = true;
})

document.getElementById('multiply').addEventListener('click', ()=>{
    operator = "X";
    enteringSecond = true;
})

document.getElementById('divide').addEventListener('click', ()=>{
    operator = "/";
    enteringSecond = true;
})


const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    if(operator === "+"){
       result = Number(currentValue) + Number(secondValue);
    }
    else if(operator === "-"){
        result = Number(currentValue) -  Number(secondValue);
    }else if(operator === "X"){
        result = Number(currentValue) * Number(secondValue);
    } else if(operator === "/"){
        result = Number(currentValue) / Number(secondValue);
    }
    display.textContent = Math.floor(result);
    currentValue = Math.floor(result);
    secondValue = "";
    enteringSecond = false;
    operator = "";
})