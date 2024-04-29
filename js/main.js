alert("Bienvenido al simulador de Cuota Simple!")

function calcularIntereses() {

    let cantidadIngresada
    do {
        cantidadIngresada = parseFloat(prompt("Ingrese el monto a pagar en cuotas:"));

        if (isNaN(cantidadIngresada)) {
            console.log("Cantidad inválida. Por favor, ingresa un número válido.");
        }
    } while (isNaN(cantidadIngresada));



    const interes10 = cantidadIngresada * 0.10;
    const total10 = cantidadIngresada + interes10;


    const interes20 = cantidadIngresada * 0.20;
    const total20 = cantidadIngresada + interes20;

    return {
        interes10: total10,
        interes20: total20,
    };
}

const resultados = calcularIntereses();
if (resultados === 'string') {
    console.log(resultados);
} else {
    console.log("Cantidad pagando en 3 cuotas: $" + resultados.interes10);
    console.log("Cantidad pagando en 6 cuotas: $" + resultados.interes20);
}

alert("Cantidad pagando en 3 cuotas: $" + resultados.interes10);

alert("Cantidad pagando en 6 cuotas: $" + resultados.interes20);
