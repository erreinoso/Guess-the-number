'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(random);

//Guardamos donde queremos escribir el texto
const clue = document.querySelector('.js-clueText');
const count = document.querySelector('.js-countNumber');
const button = document.querySelector('.js-tryButton');

//Guardamos el dato del/a usuario/a
const userinput = document.querySelector('.js-userNumber');
//Número de intentos
let attemps = 0;

//funciones handle
function handleGame() {
  handleinput();
  handleCounter();
}

function handleinput() {
  console.log(userinput.value);
  const userinputnumber = parseInt(userinput.value);
  console.log(userinputnumber);
  if (userinputnumber === random) {
    clue.innerHTML = '¡Has ganado, campeona!';
    attemps = 0;
  } else if (userinputnumber > random && userinputnumber <= 100) {
    clue.innerHTML = 'Demasiado alto';
  } else if (userinputnumber < random) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (userinputnumber > random && userinputnumber > 100) {
    clue.innerHTML = 'El número debe estar comprendido entre 1 y 100';
  }
}

function handleCounter() {
  attemps++;
  count.innerHTML = attemps;
}

//listener
button.addEventListener('click', handleGame);
