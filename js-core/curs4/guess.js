document.querySelector('input[type="button"]').addEventListener('click', check)
var result = document.querySelector('#result')
// denereaza un numar 1 si 100
var chosenNumber =  randomNumber (100) 
function randomNumber (max){
   return Math.round(Math.random()* max) 
}
function check() {
    let checkedNumber = document.querySelector('#number').value

    if (chosenNumber == checkedNumber){
        result.innerText = 'ai ghicit!'

    } else if (chosenNumber > checkedNumber) {
        result.innerText = 'Prea mic'
    }else {
        result.innerText = 'Prea mara'
    }
}
console.log(123java ' +1') ;