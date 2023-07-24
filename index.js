import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


const cajaTexto = document.querySelector("textarea[name=user-input]");
const liUno = document.querySelector('[data-testid="word-count"]');
const liDos = document.querySelector('[data-testid="character-count"]');
const liTres = document.querySelector('[data-testid="character-no-spaces-count"]');
const liCuatro = document.querySelector('[data-testid="word-length-average"]');
const liCinco = document.querySelector('[data-testid="number-count"]');
const liSeis = document.querySelector('[data-testid="number-sum"]');

cajaTexto.addEventListener("keyup", function () {
  liUno.innerHTML = 'Palabras: ' + analyzer.getWordCount(cajaTexto.value);
  liDos.innerHTML = 'Caracteres: ' + analyzer.getCharacterCount(cajaTexto.value);
  liTres.innerHTML = 'Caracteres sin Espacio:' + analyzer.getCharacterCountExcludingSpaces(cajaTexto.value);
  liCuatro.innerHTML = 'Promedio longitud: ' + analyzer.getAverageWordLength(cajaTexto.value);
  liCinco.innerHTML = 'Números: ' + analyzer.getNumberCount(cajaTexto.value);
  liSeis.innerHTML = 'Suma Números: ' + analyzer.getNumberSum(cajaTexto.value);
});

const botonReset = document.getElementById("reset-button");
botonReset.addEventListener("click", function () {
  botonReset.addEventListener("mouseover", () => {

  });
  cajaTexto.value = "";
});