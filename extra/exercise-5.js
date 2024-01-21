
/* Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas. */

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

let total = 0;

for( i = 0; i<products.length; i++){
    let products2 = products[i];
    total += products2.sellCount;
}

let averageSales = total / products.length;

console.log(averageSales);
