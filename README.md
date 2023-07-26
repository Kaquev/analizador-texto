


Contenido

1. Analizador de Texto Funcionalidades
1. Caracteristicas
1. Tecnología Web utilizada
1. Tests	
1.  Objetivos de aprendizaje

<br>


 Analizador de Texto

Un analizador de texto es una aplicación para extraer información útil de un texto utilizando diversas técnicas, todo en tiempo real, entregando las siguientes funcionalidades: <br>
- Recuento de palabras
- Recuento de caracteres
- Recuento de caracteres excluyendo espacios y signos de puntuación
- Recuento de números
- Suma total de números
- Longitud media de las palabras
- Limpiar Campo

<br>

### .Caracteristicas
<br>
El proyecto consta de 4 documentos principales: **index.html, analyzer.js, index.js y style.css**.<br>
<br>

**analyzer.js**Aqui se encuentran 6 metodos los cuales son los principales para la funcionali del analizador
<br></brgetWordCount(text):>getWordCount(text): Esta función toma un texto como entrada y devuelve el número de palabras en el texto. Filtra el texto para eliminar espacios en blanco adicionales y caracteres no alfabéticos, y luego cuenta las palabras restantes.

getCharacterCount(text): Esta función toma un texto como entrada y devuelve el número total de caracteres en el texto, incluidos espacios y signos de puntuación.

getCharacterCountExcludingSpaces(text): Esta función toma un texto como entrada y devuelve el número de caracteres, excluyendo espacios y signos de puntuación. Utiliza una expresión regular para eliminar todos los caracteres que no sean letras y números, dejando solo las letras.

getAverageWordLength(text): Esta función toma un texto como entrada y devuelve la longitud promedio de las palabras en el texto. Primero, divide el texto en palabras y luego calcula la suma de las longitudes de todas las palabras. Finalmente, divide esta suma por el número total de palabras para obtener la longitud promedio.

getNumberCount(text): Esta función toma un texto como entrada y devuelve la cantidad de números presentes en el texto. Utiliza una expresión regular para buscar y contar números válidos, incluidos números decimales.

getNumberSum(text): Esta función toma un texto como entrada y devuelve la suma de todos los números presentes en el texto. Utiliza una expresión regular para encontrar los números válidos y luego los suma todos.
<br><br>
**index.js**

 acá se debens escuchalos r eventos del DOM e, invocar los métodos del objeto analyzer según sea necesario y actualizar el resultado en la UI (interfaz de usuario).
<br><br>

**index.html**

Este archivo contener el codigo HTML.
<br>

**style.css**<br>
Este archivo contene las reglas de estilo, no está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
<br>

<br>
Tecnología Web utilizada
<br>
- HTML5: Proporciona la estructura básica de la aplicación.<br>
- CSS3: Define el diseño y estilo visual de la aplicación.<br>
- JavaScript: Implementa la funcionalidad para analizar el texto ingresado y mostrar los resultados.
<br>

------------------------------------------------------------------------------------
<br>
Pruebas:<br>
Se realizan pruebas en la terminal de Visual estudio code
<br>

<br>
Objetivos de Aprendizaje<br>
HTML<br>
 Uso de HTML semántico

CSS<br>
 Uso de selectores de CSS
 Modelo de caja (box model): borde, margen, padding

JavaScript<br>
Uso de selectores del DOM
Manejo de eventos del DOM (listeners, propagación, delegación)
Manipulación dinámica del DOM
Tipos de datos primitivos
Strings (cadenas de caracteres)
Variables (declaración, asignación, ámbito)
Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
Uso de bucles/ciclos (while, for, for..of)
Funciones (params, args, return)
Pruebas unitarias (unit tests)

Control de Versiones (Git y GitHub)<br>
Git: Instalación y configuración
Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
GitHub: Creación de cuenta y repos, configuración de llaves SSH
GitHub: Despliegue con GitHub Pages

 



