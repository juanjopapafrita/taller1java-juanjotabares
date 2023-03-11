var cantidad = parseFloat(prompt("cantidad de unidades"))
var totalapagar = 100000

if (cantidad < 5) {
    console.log("descuento del 10%")
    totalapagar = totalapagar - (totalapagar * 0.1)
    console.log("total a pagar con descuento" + totalapagar)
}

else {
    if (cantidad >= 5) {
        if (cantidad < 10) {
            console.log("descuento del 20%")
            totalapagar = totalapagar * 20 % -totalapagar
            console.log("total a pagar con descuento" + totalapagar)
        } else {
            if (cantidad >= 10) {
                console.log("si es mayor o igual 40%")
                totalapagar = totalapagar * 40 % -totalapagar
                console.log("total a pagar con descuento" + totalapagar)
            }
        }
    }
}
