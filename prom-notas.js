var notaMatematicas = prompt("Ingresa la nota de Matemáticas:");
var notaEspanol = prompt("Ingresa la nota de Español:");
var notaSociales = prompt("Ingresa la nota de Sociales:");

notaMatematicas = parseInt(notaMatematicas);
notaEspanol = parseInt(notaEspanol);
notaSociales = parseInt(notaSociales);

var promedio = (notaMatematicas + notaEspanol + notaSociales) / 3;

if (promedio == 10) {
    console.log("Excelente");
} else {
    if (promedio >= 7) {
        if (promedio < 10) {
            console.log("Bueno");
        }
    } else {
        console.log("Insuficiente");
    }
}