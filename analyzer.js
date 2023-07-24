const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let contador = 0;
    const palabras = text.replace("/[ ]+/g", " ").trim().split(" ");
    for (let i = 0; i < palabras.length; i++) {
      contador = contador + palabras[i].length;
    }
    return Number((contador / palabras.length).toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textSplit = text.split(' ')
    let contador = 0;
    for (let i = 0; i < textSplit.length; i++) {
      if (Number(textSplit[i])) {
        contador++;
      }
    }
    return contador;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const textSplit = text.split(' ')
    let contador = 0;
    for (let i = 0; i < textSplit.length; i++) {
      if (Number(textSplit[i])) {
        contador = contador + Number(textSplit[i])
      }
    }
    return contador;
  },
};

export default analyzer;