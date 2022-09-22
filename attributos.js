const animais = document.querySelector('.animais');
// Retorna uma array-like com os atributos do elemento.

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

