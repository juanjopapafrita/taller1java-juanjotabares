
var usuario = prompt("Elige piedra, papel o tijera");


var numAleatorio = Math.random() * 3;
var numRedondeado = Math.floor(numAleatorio);
var maquina;
if (numRedondeado === 0) {
  maquina = "piedra";
} else if (numRedondeado === 1) {
  maquina = "papel";
} else {
  maquina = "tijera";
}


console.log("Usuario: " + usuario);
console.log("Máquina: " + maquina);


var resultado;
if (usuario === "piedra") {
  if (maquina === "piedra") {
    resultado = "Empataste";
  } else if (maquina === "papel") {
    resultado = "Perdiste";
  } else {
    resultado = "Ganaste";
  }
} else if (usuario === "papel") {
  if (maquina === "piedra") {
    resultado = "Ganaste";
  } else if (maquina === "papel") {
    resultado = "Empataste";
  } else {
    resultado = "Perdiste";
  }
} else {
  if (maquina === "piedra") {
    resultado = "Perdiste";
  } else if (maquina === "papel") {
    resultado = "Ganaste";
  } else {
    resultado = "Empataste";
  }
}

console.log(resultado);
