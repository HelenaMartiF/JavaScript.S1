const movies = [
    {name: " Your Name", durationInMinutes: 130},
    {name: " Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: " Origen", durationInMinutes: 165}, 
    {name: " El señor de los anillos", durationInMinutes: 967}, 
    {name: " Solo en casa", durationInMinutes: 214}, 
    {name: " El jardin de las palabras", durationInMinutes: 40}];

let shortFilm = [];
let mediumFilm = [];
let longFilm = [];

for( i = 0; i<movies.length; i++){
    let movies2 = movies[i];
    let movies3 = movies2.durationInMinutes;

    if (movies2.durationInMinutes <= 99){
        shortFilm.push(movies2.name);
    }else if (movies2.durationInMinutes >= 200){
        longFilm.push(movies2.name); 
    }else{
        mediumFilm.push(movies2.name);
    }
}

console.log("Short films: " + shortFilm);
console.log("Medium films: " + mediumFilm);
console.log("Long films: " + longFilm);
