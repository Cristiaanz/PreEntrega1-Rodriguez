let option = prompt('Seleccione el Auricular que desea comprar: \n1 -Redragon Lamia \n2 -Redragon Pandora \n3 -Redragon Hylas');
const iva = 1.21;
let precioLamia = 15000;
let precioPandora = 14000;
let precioHylas = 10000;
let precioFinal = 0;

switch (option) {
    case '1':
        alert(`El auricular Redragon Lamia tiene un precio de $${precioLamia} + iva`);
        alert(`El precio total del Redragon Lamia es de $${sumaDeProductos(precioLamia)}`);
        let confirmacionDePago = confirm('¿Vas a pagar con tarjeta de crédito?');

        if (confirmacionDePago === true) {
            let pago = prompt('¿En cuantas cuotas vas a pagar?');
            calcularCuotas(pago, precioLamia);
            alert(`El producto con recargo termina costando $${precioFinal} en ${pago} cuotas.`);
        } else {
            alert(`El producto cuesta $${sumaDeProductos(precioLamia)} en efectivo.`);
        }

        break;

    case '2':
        alert(`El auricular Redragon precioPandora tiene un precio de $${precioPandora} + iva`);
        alert(`El auricular Redragon Pandora tiene un precio de $${sumaDeProductos(precioPandora)}`);
        let confirmacionDePago2 = confirm('Vas a pagar con tarjeta de crédito?');

        if (confirmacionDePago2 === true) {
            let pago = prompt('¿En cuantas cuotas vas a pagar?');
            calcularCuotas(pago, precioPandora);
            alert(`El producto con recargo termina costando $${precioFinal} en ${pago} cuotas.`);
        } else {
            alert(`El producto cuesta $${sumaDeProductos(precioPandora)} en efectivo.`);
        }

        break;

    case '3':
        alert(`El auricular Redragon precioHylas tiene un precio de $${precioHylas} + iva`);
        alert(`El auricular Redragon Hylas tiene un precio de $${sumaDeProductos(precioHylas)}`);
        let confirmacionDePago3 = confirm('Vas a pagar con tarjeta de crédito?');

        if (confirmacionDePago3 === true) {
            let pago = prompt('¿En cuantas cuotas vas a pagar?');
            calcularCuotas(pago, precioHylas);
            alert(`El producto con recargo termina costando $${precioFinal} en ${pago} cuotas.`);
        } else {
            alert(`El producto cuesta $${sumaDeProductos(precioHylas)} en efectivo.`);
        }

        break;

    default:
        alert('Operación inválida');
}

function sumaDeProductos(precio) {
    return precio * iva;
}

function calcularCuotas(cuotas, precio) {
    const valorProducto = precio * iva;
    for (let i = 1; i <= cuotas; i++) {
        precioFinal = ((valorProducto * i) / 60) + valorProducto;
    }
}

alert('Gracias por su compra!');