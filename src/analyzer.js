const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    return "Palabras: " + words.length;
  },
  // + text.replace(/[ ]+/g, " ").trim().split(" ").length;
  //
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return "Caracteres: " + text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return "Caracteres Sin Espacios: " + text.replaceAll(" ", "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let contador = 0;
    const palabras = text.replace("/[ ]+/g", " ").trim().split(" ");
    for (let i = 0; i < palabras.length; i++) {
      contador = contador + palabras[i].length;
    }
    return "Longitud Media: " + (contador / palabras.length).toFixed(1);

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return "Numeros: " + text.replace(/\D/g, "").length;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let contador = 0;
    for (let i = 0; i < text.length; i++) {
      if (!isNaN(text.charAt(i))) {
        contador = contador + Number(text.charAt(i));
      }
    }
    return "Suma Numeros: " + contador;
  },
};

export default analyzer;