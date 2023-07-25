const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //se crea un const y le di parametros. Words es igual a texto sin espacios en blanco, y dividido en palabras.
    // trim = elimina espacios en blanco split = separación de la cadena Lenght= Para saber la cantidad de elementos de un array 
    // con la expresion regular le damos parametros a cada metodo
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    // Se utiliza solo return 
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // La funcion me devolvera la cadena de texto, pero le indico que que todos los espacios en blanco, los puntos y comas, 
    //los reemplace por nada, 
    return text.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //const contador me guardara el resultado por eso lo dejamos en 0
    // se crea un const y la funcion con los parametros indicados con la expresion regular
    //Se recorre el largo del string con un bucle for, y en cada iteracion se suma el largo de cada palabra
    let contador = 0;
    const palabras = text.replace("/[ ]+/g", " ").trim().split(" ");
    for (let i = 0; i < palabras.length; i++) {
      contador = contador + palabras[i].length;
    }
    return Number((contador / palabras.length).toFixed(2));
    //retorna contador dividido por el largo total de las palabras. Con tofixed redondeamos los decimales
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //const texto, seperar el texto por espacios, (' ') en blanco
    // let contador y un bucle for para sumar solo los number, el ciclo lo dara en inicio hasta la cantidad del string
    // por cada iteracion le suma 1 solo si es numero
    const textSplit = text.split(' ')
    let contador = 0;
    for (let i = 0; i < textSplit.length; i++) {
      if (Number(textSplit[i])) { //si textsplit es un numero suma si no lo salta
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
        contador = contador + Number(textSplit[i]) // se suma el valor del numero
      }
    }
    return contador;
  },
};

export default analyzer;