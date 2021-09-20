// sorting array
const numbers = [34,2,3,54,223,65];
const sortNumber = numbers.sort((a,b) => b -a);
console.log();

//sorting string
const foods = ["sup","pizza","pasta","anggur","baso","chiki"];
const fortfoods = foods.sort();
const reverseFoords = foods.reverse();
const sortFood2 = foods.sort((a,b) => a > b ? 1 : -1);

console.log();