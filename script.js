const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumuate 

function calculate(button){
    const value = button.textContent;
    if(value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = '-'
    }
    else if(value === "="){
        screenDisplay.textContent = eval(accumuate);
    }
    else {
        calculation.push(value)
        accumuate = calculation.join('')
        screenDisplay.textContent = accumuate
        console.log(calculation)

    }

}




buttons.forEach(button => button.addEventListener( 'click' , () => calculate(button)));