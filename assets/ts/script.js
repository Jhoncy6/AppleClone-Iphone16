/* eslint-disable */


gsap.registerPlugin(ScrollTrigger);

const sectionAnimacaoScroll = document.getElementById('AnimacaoScroll');
const ImgHero = document.querySelector('.ImgHero');

gsap.fromTo(ImgHero,
  { scale: 4 },
  {
    scale: 1,
    ease: 'power4.out',
    immediateRender: false, 
    scrollTrigger: {
      trigger: AnimacaoScroll,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true,
    }
  }
);


// As seleçoes (productivity,express,siri)
const productivity = document.querySelector('.opcaoProdu');
const express = document.querySelector('.opcaoVisual');
const siri = document.querySelector('.opcaoSiri');

// Classe de esconder ou adicionar
const produtividade = document.querySelector('.productivity');
const expreso = document.querySelector('.express');
const sirizinha = document.querySelector('.siri');

// Botão de pause e play
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const ApresenCam = document.getElementById("ApresentacaoCamera");

// ve se estão sendo apertados botões da siri
productivity.addEventListener('click', produtivi);
express.addEventListener('click', expresss);
siri.addEventListener('click', sirii);

// ve se estão sendo apertados botão de pause e play
play.addEventListener('click', reproduzir);
pause.addEventListener('click', pausar);


// video continua, some com o play, aparece o pause,
function reproduzir() {
  ApresenCam.play();
  pause.classList.remove('disablePouseUnPause');
  play.classList.add('disablePouseUnPause');
}

// video pause, some com o pause, aparece o play,
function pausar() {
  ApresenCam.pause();
  play.classList.remove('disablePouseUnPause');
  pause.classList.add('disablePouseUnPause');
}


// ativa productivity e desativa todos
function produtivi() {
  productivity.classList.remove("disable"); // Classe dos botões
  productivity.classList.add("active");  // Classe dos botões
  express.classList.add("disable");  // Classe dos botões
  siri.classList.add("disable");  // Classe dos botões

  produtividade.classList.remove("esconder");
  produtividade.classList.add("aparecer");
  expreso.classList.add("esconder");
  sirizinha.classList.add("esconder");
}


// ativa express e desativa todos
function expresss() {
  express.classList.remove("disable");   // Classe dos botões
  express.classList.add("active");       // Classe dos botões
  productivity.classList.add("disable"); // Classe dos botões
  siri.classList.add("disable");         // Classe dos botões

  expreso.classList.remove("esconder");
  expreso.classList.add("aparecer");
  produtividade.classList.add("esconder");
  sirizinha.classList.add("esconder");
}

// ativa siri e desativa todos
function sirii() {
  siri.classList.remove("disable");           // Classe dos botões
  siri.classList.add("active");              // Classe dos botões
  express.classList.add("disable");         // Classe dos botões
  productivity.classList.add("disable");

  sirizinha.classList.remove("esconder");
  sirizinha.classList.add("aparecer");
  expreso.classList.add("esconder");
  produtividade.classList.add("esconder");
}

window.addEventListener('scroll', () => {
  const menu = document.getElementById('menu');
  const NavBarEscondidaId = document.querySelector('#NavBarEsconder')
  const NavBarNormalId = document.querySelector('#NavBarNormal')
  const NavBarEsconderTxt = document.querySelector('#NavBarEsconderTxt')
  const NavBarNormalLogo = document.querySelector('#NavBarNormalLogo')
  const navbarColor = document.querySelector('#NavbarColorBlack')


  if (window.scrollY > 100) {
    navbarColor.classList.remove('navbarColor')
    menu.classList.add('mudar');
    menu.classList.add('bgDiferente');
    NavBarEscondidaId.classList.remove('NavBarEscondida');
    NavBarEsconderTxt.classList.remove('NavBarEscondida');
    NavBarNormalId.classList.add('NavBarEscondida');
    NavBarNormalLogo.classList.add('NavBarEscondida')


  } else {
    navbarColor.classList.add('navbarColor')
    menu.classList.remove('mudar');
    menu.classList.remove('bgDiferente');
    NavBarNormalLogo.classList.remove('NavBarEscondida')
    NavBarNormalId.classList.remove('NavBarEscondida');
    NavBarEscondidaId.classList.add('NavBarEscondida');
    NavBarEsconderTxt.classList.add('NavBarEscondida');

  }
});


// VIDEO DE MUSICA

document.addEventListener('DOMContentLoaded', () => {
  const play = document.getElementById('play');
  const video = document.getElementById('videoMusica');
  const poster = document.getElementById('poster');

  play.addEventListener('click', () => {
    play.classList.add('VideoMusicaDisable');
    poster.classList.add('VideoMusicaDisable');
    video.classList.remove('VideoMusicaDisable');
    video.play();
  });
});





// <img>
const imgMacro = document.querySelector('.imgMacro');
const img13 = document.querySelector('.img13');
const img24 = document.querySelector('.img24');
const img28 = document.querySelector('.img28');
const img35 = document.querySelector('.img35');
const img48 = document.querySelector('.img48');
const img120 = document.querySelector('.img120');

// <a>
const amacro = document.querySelector('.amacro');
const a13mm = document.querySelector('.a13mm');
const a24mm = document.querySelector('.a24mm');
const a28mm = document.querySelector('.a28mm');
const a35mm = document.querySelector('.a35mm');
const a48mm = document.querySelector('.a48mm');
const a120mm = document.querySelector('.a120mm');

// h1
const amacroinfo = document.querySelector('.amacroinfo')
const a13mminfo = document.querySelector('.a13mminfo')
const a24mminfo = document.querySelector('.a24mminfo')
const a28mminfo = document.querySelector('.a28mminfo')
const a35mminfo = document.querySelector('.a35mminfo')
const a48mminfo = document.querySelector('.a48mminfo')
const a120mminfo = document.querySelector('.a120mminfo')

// Função de resetar as imagem  botão(a) e a escrita (h1)
function resetStates() {
  imgMacro.classList.remove('imgactive');
  img13.classList.remove('imgactive');
  img24.classList.remove('imgactive');
  img28.classList.remove('imgactive');
  img35.classList.remove('imgactive');
  img48.classList.remove('imgactive');
  img120.classList.remove('imgactive');

  imgMacro.classList.add('imgDesactive');
  img13.classList.add('imgDesactive');
  img24.classList.add('imgDesactive');
  img28.classList.add('imgDesactive');
  img35.classList.add('imgDesactive');
  img48.classList.add('imgDesactive');
  img120.classList.add('imgDesactive');

  amacro.classList.remove('ativado');
  a13mm.classList.remove('ativado');
  a24mm.classList.remove('ativado');
  a28mm.classList.remove('ativado');
  a35mm.classList.remove('ativado');
  a48mm.classList.remove('ativado');
  a120mm.classList.remove('ativado');

  amacroinfo.classList.add('txtDesativado')
  a13mminfo.classList.add('txtDesativado')
  a24mminfo.classList.add('txtDesativado')
  a28mminfo.classList.add('txtDesativado')
  a35mminfo.classList.add('txtDesativado')
  a48mminfo.classList.add('txtDesativado')
  a120mminfo.classList.add('txtDesativado')
}


function activateOption(option) {
  resetStates(); //Primeira coisa que ele vai fazer, será resetar tudo e todos
  switch (option) {
    case 'amacro':
      imgMacro.classList.remove('imgDesactive');
      imgMacro.classList.add('imgactive');
      amacro.classList.add('ativado');
      amacroinfo.classList.remove('txtDesativado')
      break;

    case 'a13mm':
      img13.classList.remove('imgDesactive');
      img13.classList.add('imgactive');
      a13mm.classList.add('ativado');
      a13mminfo.classList.remove('txtDesativado')
      break;

    case 'a24mm':
      img24.classList.remove('imgDesactive');
      img24.classList.add('imgactive');
      a24mm.classList.add('ativado');
      a24mminfo.classList.remove('txtDesativado')
      break;

    case 'a28mm':
      img28.classList.remove('imgDesactive');
      img28.classList.add('imgactive');
      a28mm.classList.add('ativado');
      a28mminfo.classList.remove('txtDesativado')
      break;

    case 'a35mm':
      img35.classList.remove('imgDesactive');
      img35.classList.add('imgactive');
      a35mm.classList.add('ativado');
      a35mminfo.classList.remove('txtDesativado')
      break;

    case 'a48mm':
      img48.classList.remove('imgDesactive');
      img48.classList.add('imgactive');
      a48mm.classList.add('ativado');
      a48mminfo.classList.remove('txtDesativado')
      break;

    case 'a120mm':
      img120.classList.remove('imgDesactive');
      img120.classList.add('imgactive');
      a120mm.classList.add('ativado');
      a120mminfo.classList.remove('txtDesativado')
      break;
  }
}

// Deixar os botões ativados
amacro.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('amacro');
});

a13mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a13mm');
});

a24mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a24mm');
});

a28mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a28mm');
});

a35mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a35mm');
});

a48mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a48mm');
});

a120mm.addEventListener('click', function (e) {
  e.preventDefault();
  activateOption('a120mm');
});


// IPHONES COMAPRAÇÃO

infoProcessador = document.getElementById('infoProcessador')
infoProcessadorVelocity = document.getElementById('infoProcessadorVelocity')

document.getElementById('comparacaoProcessador').addEventListener('change', function () {
  let valorDeComparacao = document.getElementById('comparacaoProcessador').value;

  switch (valorDeComparacao) {
    case '1':
      infoProcessador.innerText = '60% faster';
      infoProcessadorVelocity.innerText = '2x faster';
      break;

    case '2':
      infoProcessador.innerText = '60% faster';
      infoProcessadorVelocity.innerText = '2x faster';
      break;

    case '3':
      infoProcessador.innerText = '40% faster';
      infoProcessadorVelocity.innerText = '50% faster';
      break;

    case '4':
      infoProcessador.innerText = '40% faster';
      infoProcessadorVelocity.innerText = '50% faster';
      break;

    case '5':
      infoProcessador.innerText = '30% faster';
      infoProcessadorVelocity.innerText = '40% faster';
      break;

    case '6':
      infoProcessador.innerText = '30% faster';
      infoProcessadorVelocity.innerText = '40% faster';
      break;

    case '7':
      infoProcessador.innerText = '15% faster';
      infoProcessadorVelocity.innerText = '20% faster';
      break;

    case '8':
      infoProcessador.innerText = '15% faster';
      infoProcessadorVelocity.innerText = '20% faster';
      break;
  }
});


// Comparação BATERIA

infoBateriaPorcentage = document.getElementById('infoBateriaPorcentage');
infoBateriaVelocity = document.getElementById('infoBateriaVelocity');

document.getElementById('comparacaoBateria').addEventListener('change', function () {
  let valorDeComparacaoBateria = document.getElementById('comparacaoBateria').value;

  switch (valorDeComparacaoBateria) {
    case '1':
      infoBateriaPorcentage.innerText = '10 more hours';
      infoBateriaVelocity.innerText = '16 more hours';
      break;

    case '2':
      infoBateriaPorcentage.innerText = '7 more hours';
      infoBateriaVelocity.innerText = '13 more hours';
      break;

    case '3':
      infoBateriaPorcentage.innerText = '5 more hours';
      infoBateriaVelocity.innerText = '11 more hours';
      break;

    case '4':
      infoBateriaPorcentage.innerText = '1 less hour';
      infoBateriaVelocity.innerText = '5 more hours';
      break;

    case '5':
      infoBateriaPorcentage.innerText = '4 more hours';
      infoBateriaVelocity.innerText = '10 more hours';
      break;

    case '6':
      infoBateriaPorcentage.innerText = '2 less hours';
      infoBateriaVelocity.innerText = '4 more hours';
      break;

    case '7':
      infoBateriaPorcentage.innerText = '4 more hours';
      infoBateriaVelocity.innerText = '10 more hours';
      break;

    case '8':
      infoBateriaPorcentage.innerText = '2 less hours';
      infoBateriaVelocity.innerText = '4 more hours';
      break;
  }
});


// Comparação Iphones Upgrade

quantidadeBateria = document.getElementById('quantidadeBateria');
porcentagemRapido = document.getElementById('porcentagemRapido');
Piscando = document.getElementById('Piscando');


document.getElementById('comparacaoIphones').addEventListener('change', function () {
  let valorDaComparacaoIphones = document.getElementById('comparacaoIphones').value;

  Piscando.classList.add('piscando');

  setTimeout(function () {
    Piscando.classList.remove('piscando');
  }, 2000);

  switch (valorDaComparacaoIphones) {

    case 'comparation1':
      quantidadeBateria.innerHTML = '16 more <br> hours';
      porcentagemRapido.innerHTML = '60% <br> faster';
      break;

    case 'comparation2':
      quantidadeBateria.innerHTML = '13 more <br> hours';
      porcentagemRapido.innerHTML = '60% <br> faster';
      break;

    case 'comparation3':
      quantidadeBateria.innerHTML = '11 more <br> hours';
      porcentagemRapido.innerHTML = '40% <br> faster';
      break;

    case 'comparation4':
      quantidadeBateria.innerHTML = '5 more <br> hours';
      porcentagemRapido.innerHTML = '40% <br> faster';
      break;

    case 'comparation5':
      quantidadeBateria.innerHTML = '10 more <br> hours';
      porcentagemRapido.innerHTML = '30% <br> faster';
      break;

    case 'comparation6':
      quantidadeBateria.innerHTML = '4 more <br> hours';
      porcentagemRapido.innerHTML = '30% <br> faster';
      break;

    case 'comparation7':
      quantidadeBateria.innerHTML = '10 more <br> hours';
      porcentagemRapido.innerHTML = '15% <br> faster';
      break;

    case 'comparation8':
      quantidadeBateria.innerHTML = '4 more <br> hours';
      porcentagemRapido.innerHTML = '15 % <br> faster';
      break;
  }
});


// BUTÃO
ButtoniphoneAndMac = document.getElementById('ButtoniphoneAndMac')
ButtonappWatch = document.getElementById('ButtonappWatch')
ButtonairPods = document.getElementById('ButtonairPods')

// IMG
iphoneAndMacImg = document.getElementById('iphoneAndMacImg')
appWatchImg = document.getElementById('appWatchImg')
airPodsImg = document.getElementById('airPodsImg')

function resetarIMG() {
  iphoneAndMacImg.classList.remove('imgActive');
  appWatchImg.classList.remove('imgActive');
  airPodsImg.classList.remove('imgActive');

  iphoneAndMacImg.classList.add('imgBlock');
  appWatchImg.classList.add('imgBlock');
  airPodsImg.classList.add('imgBlock');
}

// ---------------------------------------------- IphoneMAC ------------------------------------------------
ButtoniphoneAndMac.addEventListener('click', function () {
  resetarIMG();
  iphoneAndMacImg.classList.remove('imgBlock');
  iphoneAndMacImg.classList.add('imgActive');
});

// ---------------------------------------------- App Watch ------------------------------------------------
ButtonappWatch.addEventListener('click', function () {
  resetarIMG();
  appWatchImg.classList.remove('imgBlock');
  appWatchImg.classList.add('imgActive');
});


// ---------------------------------------------- AirPods ------------------------------------------------
ButtonairPods.addEventListener('click', function () {
  resetarIMG();
  airPodsImg.classList.remove('imgBlock');
  airPodsImg.classList.add('imgActive');
});


//Iphone trocando de COR

// Cores do Iphone
ImgCorSelecionadaTodas = document.getElementById('ImgCorSelecionadaTodas')
ImgCorSelecionadaPreto = document.getElementById('ImgCorSelecionadaPreto')
ImgCorSelecionadaBranco = document.getElementById('ImgCorSelecionadaBranco')
ImgCorSelecionadaCinza = document.getElementById('ImgCorSelecionadaCinza')
ImgCorSelecionadaDourada = document.getElementById('ImgCorSelecionadaDourada')

//Texto das Cores

TextoTodasCores = document.getElementById('TextoTodasCores')
TextoTodasPreto = document.getElementById('TextoTodasPreto')
TextoTodasBranco = document.getElementById('TextoTodasBranco')
TextoTodasCinza = document.getElementById('TextoTodasCinza')
TextoTodasDourado = document.getElementById('TextoTodasDourado')


//BOX DE CORES
CorSelecionadaTodas = document.getElementById('CorSelecionadaTodas')
CorSelecionadaPreto = document.getElementById('CorSelecionadaPreto')
CorSelecionadaBranco = document.getElementById('CorSelecionadaBranco')
CorSelecionadaCinza = document.getElementById('CorSelecionadaCinza')
CorSelecionadaDourado = document.getElementById('CorSelecionadaDourado')


function ResetTodasCores() {
  //Desativando todas as IMG de CORES
  ImgCorSelecionadaTodas.classList.remove('ImgAtivadaCor')
  ImgCorSelecionadaPreto.classList.remove('ImgAtivadaCor')
  ImgCorSelecionadaBranco.classList.remove('ImgAtivadaCor')
  ImgCorSelecionadaCinza.classList.remove('ImgAtivadaCor')
  ImgCorSelecionadaDourada.classList.remove('ImgAtivadaCor')

  ImgCorSelecionadaTodas.classList.add('ImgDesativadaCor')
  ImgCorSelecionadaPreto.classList.add('ImgDesativadaCor')
  ImgCorSelecionadaBranco.classList.add('ImgDesativadaCor')
  ImgCorSelecionadaCinza.classList.add('ImgDesativadaCor')
  ImgCorSelecionadaDourada.classList.add('ImgDesativadaCor')

  //Desativando todos os textos
  TextoTodasCores.classList.remove('TextoAtivado')
  TextoTodasPreto.classList.remove('TextoAtivado')
  TextoTodasBranco.classList.remove('TextoAtivado')
  TextoTodasCinza.classList.remove('TextoAtivado')
  TextoTodasDourado.classList.remove('TextoAtivado')

  TextoTodasCores.classList.add('TextoDesativado')
  TextoTodasPreto.classList.add('TextoDesativado')
  TextoTodasBranco.classList.add('TextoDesativado')
  TextoTodasCinza.classList.add('TextoDesativado')
  TextoTodasDourado.classList.add('TextoDesativado')

  //Desativando todas as opcoes de cores
  CorSelecionadaTodas.classList.remove('CorAtivada')
  CorSelecionadaPreto.classList.remove('CorAtivada')
  CorSelecionadaBranco.classList.remove('CorAtivada')
  CorSelecionadaCinza.classList.remove('CorAtivada')
  CorSelecionadaDourado.classList.remove('CorAtivada')
}
// ---------------------------------------------- TODAS AS CORES ------------------------------------------------
CorSelecionadaTodas.addEventListener('click', function () {
  ResetTodasCores();                                          // Restar TUDO
  ImgCorSelecionadaTodas.classList.remove('ImgDesativadaCor') // Desativar o desativamento da IMG
  ImgCorSelecionadaTodas.classList.add('ImgAtivadaCor')       // Ativar a IMG
  CorSelecionadaTodas.classList.add('CorAtivada')             // Ativa o botao, mostrando que esta ativado
  TextoTodasCores.classList.remove('TextoDesativado')         // Desativa o desativamento do Texto
  TextoTodasCores.classList.add('TextoAtivado')               // Ativa o Texto
});
// ------------------------------------------------ COR PRETA ------------------------------------------------
CorSelecionadaPreto.addEventListener('click', function () {
  ResetTodasCores();                                          // Restar TUDO
  ImgCorSelecionadaPreto.classList.remove('ImgDesativadaCor') // Desativar o desativamento da IMG
  ImgCorSelecionadaPreto.classList.add('ImgAtivadaCor')       // Ativar a IMG
  CorSelecionadaPreto.classList.add('CorAtivada')             // Ativa o botao, mostrando que esta ativado
  TextoTodasPreto.classList.remove('TextoDesativado')         // Desativa o desativamento do Texto
  TextoTodasPreto.classList.add('TextoAtivado')               // Ativa o Texto
});

// ------------------------------------------------ COR BRANCA ------------------------------------------------
CorSelecionadaBranco.addEventListener('click', function () {
  ResetTodasCores();                                          // Restar TUDO
  ImgCorSelecionadaBranco.classList.remove('ImgDesativadaCor') // Desativar o desativamento da IMG
  ImgCorSelecionadaBranco.classList.add('ImgAtivadaCor')       // Ativar a IMG
  CorSelecionadaBranco.classList.add('CorAtivada')             // Ativa o botao, mostrando que esta ativado
  TextoTodasBranco.classList.remove('TextoDesativado')         // Desativa o desativamento do Texto
  TextoTodasBranco.classList.add('TextoAtivado')               // Ativa o Texto
});

// ------------------------------------------------ COR CINZA ------------------------------------------------
CorSelecionadaCinza.addEventListener('click', function () {
  ResetTodasCores();                                          // Restar TUDO
  ImgCorSelecionadaCinza.classList.remove('ImgDesativadaCor') // Desativar o desativamento da IMG
  ImgCorSelecionadaCinza.classList.add('ImgAtivadaCor')       // Ativar a IMG
  CorSelecionadaCinza.classList.add('CorAtivada')            // Ativa o botao, mostrando que esta ativado
  TextoTodasCinza.classList.remove('TextoDesativado')         // Desativa o desativamento do Texto
  TextoTodasCinza.classList.add('TextoAtivado')               // Ativa o Texto
});

// ------------------------------------------------ COR DOURADA ------------------------------------------------
CorSelecionadaDourado.addEventListener('click', function () {
  ResetTodasCores();                                          // Restar TUDO
  ImgCorSelecionadaDourada.classList.remove('ImgDesativadaCor') // Desativar o desativamento da IMG
  ImgCorSelecionadaDourada.classList.add('ImgAtivadaCor')       // Ativar a IMG
  CorSelecionadaDourado.classList.add('CorAtivada')            // Ativa o botao, mostrando que esta ativado
  TextoTodasDourado.classList.remove('TextoDesativado')         // Desativa o desativamento do Texto
  TextoTodasDourado.classList.add('TextoAtivado')               // Ativa o Texto
});



