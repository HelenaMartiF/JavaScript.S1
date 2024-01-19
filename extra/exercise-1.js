const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}];

for( i = 0; i<users.length; i++){
    let users2 = users[i];
    let users3 = users2.years;
    if(users3 >= 18){
        console.log("Usuario mayor de edad:" + users2.name);
    }
    else{
        console.log("Usuario menor de edad:" + users2.name);
    }
}