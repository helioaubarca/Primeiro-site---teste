/* const section = document.querySelector('.animais');
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
section.clientHeight; // height + padding
//const listaAnimais = document.querySelector('.animais-lista');
//const height = listaAnimais.height; //
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll


const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;
//const animaisTop = listaAnimais.offsetTop;
// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;
const primeiroh2 = document.querySelector('h2');
const h21left = primeiroh2.offsetLeft;
console.log(h21left);


//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
//const rect = primeiroh2.getBoundingClientRect();
//console.log(rect.height);


window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}
*/

//Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


