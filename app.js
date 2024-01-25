let intento = 1;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

//recibe el numero ingresado.. compara y devuelve un mensaje
// limpia la caja.. si es falso suma 1 al intento
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.querySelector("#valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Adivinaste el número!! Y en solo ${intento} ${intento == 1? 'vez' : 'veces'}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
        numeroDeUsuario > numeroSecreto
        ? asignarTextoElemento("p", "El número es menor")
        : asignarTextoElemento("p", "El número es mayor");
        limpiarCaja();
        intento++;
    }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

//Genera un numero aleatorio y guarda el numero anterior asi no repetirlo
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  if (listaNumerosSorteados.includes(numeroGenerado)){
    asignarTextoElemento('p', 'Legaste al numero máximo de intentos');
  } else{
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();      
      }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
}
}

// Agrega el titulo y su parrafo
function mensajesIniciales(){
  asignarTextoElemento("h1", "Juego del número secrreto 3.0");
  asignarTextoElemento("p", "Ingresa un número del 1 al 10");
  
}

//Limpia la caja.. devuelve el texto inicial.. elimina el array de nuemros
//desactiva el boton.. reinicia el numero de intentos
function reiniciarJuego(){
    limpiarCaja();
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

mensajesIniciales();