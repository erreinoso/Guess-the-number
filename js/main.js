'use strict';
//Obtenemos número aleatorio, máximo 100
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log(random);

//Guardamos dónde queremos escribir el texto
const clue = document.querySelector('.js-clueText');
const count = document.querySelector('.js-countNumber');

//Guardamos dónde va a producirse el evento
const button = document.querySelector('.js-tryButton');

//Guardamos el dato del/a usuario/a
const userinput = document.querySelector('.js-userNumber');

//Número de intentos
let attemps = 0;

//funciones handle
function handleGame() {
  handleInput();
  handleCounter();
}

function handleInput() {
  const userinputnumber = parseInt(userinput.value);
  console.log(userinputnumber);
  if (userinputnumber === random) {
    clue.innerHTML = '¡Has ganado, campeona!';
    // attemps = 0; Depende de la interpretación.
    //El enunciado dice que pongamos el numero de veces que se ha pulsado el boton, no el numero de intentos por lo que dejo que se deje acumulando
  } else if (userinputnumber > random && userinputnumber <= 100) {
    clue.innerHTML = 'Demasiado alto';
  } else if (userinputnumber < random && userinputnumber > 0) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (
    (userinputnumber > random && userinputnumber > 100) ||
    (userinputnumber < random && userinputnumber <= 0)
  ) {
    clue.innerHTML = 'El número debe estar comprendido entre 1 y 100';
  }
}

function handleCounter() {
  attemps++;
  count.innerHTML = attemps;
}

//listener
button.addEventListener('click', handleGame);
