
/* Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.
 */


const goodProducts = [];
const badProducts = [];
const movies = [
    {name: ' Gorra de rodilla', sellCount: 10},
    {name: ' Pantalón de pana', sellCount: 302},
    {name: ' Reloj de papel albal', sellCount: 23},
    {name: ' Inpar de zapatos', sellCount: 6}];

for (i = 0; i < movies.length; i++){
    let movies2 = movies[i];
    let movies3 = movies2.sellCount;

    if(movies2.sellCount <= 19){
        badProducts.push(movies2.name);
    }else{
        goodProducts.push(movies2.name)

    }
}
console.log("Good products:" + goodProducts);
console.log("Bad products:" + badProducts);
