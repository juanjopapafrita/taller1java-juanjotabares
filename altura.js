var altura = prompt("ingrese la altura en centimetros")

altura = parseInt(altura)
if (altura <= 150) {
    console.log("altura baja")
} else {
    if (altura >= 151) {
        if (altura <= 170) {
            console.log("altura media")
        } else {
            if (altura >= 171) {
                console.log("persona alta")
            }
        }
    }
}