
var estatura = parseFloat(prompt('Ingrese su estatura en metros:'));
var velocidad = parseFloat(prompt('Ingrese su velocidad :'));
var edad = parseInt(prompt('Ingrese su edad :'));


var cumpleRequisitos;


if (estatura >= 1.80) {
  if (velocidad >= 3) {
    if (edad < 18) {
      console.log('Felicidades, puedes ingresar a la división menor de edad del equipo de baloncesto!');
    } else {
      console.log('Felicidades, puedes ingresar al equipo profesional de mayores de baloncesto!');
    }
  } else {
    console.log('Lo siento, no cumples con los requisitos necesarios para ingresar al equipo de baloncesto.');
  }
} else {
  console.log('Lo siento, no cumples con los requisitos necesarios para ingresar al equipo de baloncesto.');
}