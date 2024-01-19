
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true}, 
    {name: "Pasta", isVegan: true}];

    for( let i = 0; i < foodSchedule.length; i++){
        let foodSchedule2 = foodSchedule[i];
        let foodSchedule3 = foodSchedule2.isVegan;

        if (foodSchedule2.isVegan != true){
            let random = Math.floor(Math.random()*fruits.length);
            foodSchedule2.name = fruits[random];

        }

        console.log(foodSchedule2)
    }

    