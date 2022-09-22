const menu = document.querySelector('.menu');
//console.log(menu.classList);

//menu.className; // string
//menu.classList; // lista de classes
menu.classList.add('ativo'); // adiciona classe
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // se estiver ativo, remove. Vice-versa.
menu.classList.contains('grid-section faq'); // true ou false
console.log(menu.classList.contains);
menu.classList.replace('ativo', 'inativo');
