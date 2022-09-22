const img = document.querySelector('img');

 function callback(event) {
    console.log(event);
  }
// elemento.addEventListener(event, callback, options)
 img.addEventListener('click', callback)
//Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento. 
/*
const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
    event.preventDefault();
    console.log(event);
  }
  
linkExterno.addEventListener('click', clickNoLink);
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado. 

//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}
//this.getAttribute('href')); para pegar o link
img.addEventListener('click', callback);



const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', callback);
function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
  }
  
  window.addEventListener('keydown', handleKeyboard);
  

  const imgs = document.querySelectorAll('img');

  function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
  }
  
  imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
  });
  */