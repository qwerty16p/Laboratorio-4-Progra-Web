/**
 * Dado un array de números enteros positivos desordenados,
 * devuelve otro array con los números ordenados.
 */
function ordenar(arr) {
    const nuevoArray = [...arr];
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - 1 - i; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

console.log("Arreglo ordenado:", ordenar([14, 23, 99, 874, 93, 12]));

/**
 * Crea una función que reciba un número entero positivo y devuelva true
 * si dicho número es par o false en caso contrario.
 */
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿Es par el número 7?", esPar(7));
console.log("¿Es par el número 10?", esPar(10));


/**
 * Crea una función que reciba velocidadCrecimiento, velocidadDecrecimiento y
 * alturaDeseada como números enteros positivos y devuelva el número de días
 * que tardará la planta en medir la alturaDeseada.
 */
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        dias++;
        altura += velocidadCrecimiento;
        if (altura >= alturaDeseada) {
            return dias;
        }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

console.log("Días para alcanzar la altura deseada:", calcularDiasCrecimiento(10, 2, 100));