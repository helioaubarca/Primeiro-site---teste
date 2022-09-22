// Retorne no console todas as imagens do site
/* const img = document.querySelectorAll("img");
console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagens);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = animais.querySelector('h2');
console.log(h2Animais);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);


// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

//paragrafos.forEach((item) => {
  //  console.log(item);
//})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
const itens = document.querySelectorAll('.menu a');

    itens.forEach((item) => {
    item.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itens.forEach((item) => {
    item.classList.remove('ativo');
})
//ex pra add um:
// itens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
   const possuiAtributo = img.hasAttribute('alt');
   console.log(img, possuiAtributo);
})


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })

this.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT); */

