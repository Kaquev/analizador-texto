import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//creo las variable con const comenzando por textarea llamada cajatexto, luego una por cada li. 
//Con el metodo querySelector llamo a los selectores del documento html que queremos "enlazar"
//usando los atributos dados en el readme
const cajaTexto = document.querySelector("textarea[name=user-input]");
const liUno = document.querySelector('[data-testid="word-count"]');
const liDos = document.querySelector('[data-testid="character-count"]');
const liTres = document.querySelector('[data-testid="character-no-spaces-count"]');
const liCuatro = document.querySelector('[data-testid="word-length-average"]');
const liCinco = document.querySelector('[data-testid="number-count"]');
const liSeis = document.querySelector('[data-testid="number-sum"]');


//Aca utilizo el metodo addEventListener con un keyup para detectar cuando hay una accion que presiona la tecla
//Luego de que ocurre el evento, creo una con innerHTML 


cajaTexto.addEventListener("keyup", function () {
  liUno.innerHTML = 'Palabras: ' + analyzer.getWordCount(cajaTexto.value);
  liDos.innerHTML = 'Caracteres: ' + analyzer.getCharacterCount(cajaTexto.value);
  liTres.innerHTML = 'Caracteres sin Espacio:' + analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
  liCuatro.innerHTML = 'Promedio longitud: ' + analyzer.getAverageWordLength(cajaTexto.value);
  liCinco.innerHTML = 'Números: ' + analyzer.getNumberCount(cajaTexto.value);
  liSeis.innerHTML = 'Suma Números: ' + analyzer.getNumberSum(cajaTexto.value);
});

//Creo un const para el boton "limpiar campo"  con el metodo getElementById con el id del boton
//Nuevamente con el metodo addEventListener buscamos detectar evento "click"
//Indicamos que textaarea debe quedar "vacio" limpio" cada vez que se presione el boton 

const botonReset = document.getElementById("reset-button");
botonReset.addEventListener("click", function () {
  botonReset.addEventListener("mouseover", () => {
    // evento mouseover Cuando el puntero del mouse se mueve sobre un elemento 
  });
  cajaTexto.value = "";
});