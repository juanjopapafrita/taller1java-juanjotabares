
var listado_frutas = "1. Manzana ($1LUKA)\n2. Naranja ($500pesos)\n3. Banano ($2LUKAS)\n4. Fresa ($1500LUKAS)\n5. Kiwi ($700pesos)\n6. Mango ($800pesos)";
alert("Seleccione una fruta del siguiente listado:\n" + listado_frutas);

var fruta_seleccionada = prompt("Indique el número de la fruta que desea comprar (1-6):");
var cantidad_frutas = prompt("Indique la cantidad de frutas que desea comprar:");


var valor_por_unidad;
var nombre_fruta;

if (fruta_seleccionada == "1") {
  valor_por_unidad = 1000;
  nombre_fruta = "Manzana";
} else if (fruta_seleccionada == "2") {
  valor_por_unidad = 500;
  nombre_fruta = "Naranja";
} else if (fruta_seleccionada == "3") {
  valor_por_unidad = 2000;
  nombre_fruta = "Banano";
} else if (fruta_seleccionada == "4") {
  valor_por_unidad = 1500;
  nombre_fruta = "Fresa";
} else if (fruta_seleccionada == "5") {
  valor_por_unidad = 700;
  nombre_fruta = "Kiwi";
} else if (fruta_seleccionada == "6") {
  valor_por_unidad = 800;
  nombre_fruta = "Mango";
} else {
  alert("La fruta seleccionada no es válida. Por favor, seleccione una fruta del 1 al 6.");
}

var valor_total = cantidad_frutas * valor_por_unidad;


alert("Fruta seleccionada: " + nombre_fruta + "Valor por unidad: $" + valor_por_unidad + "Valor total de la compra: $" + valor_total);
