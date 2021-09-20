//init array
const emptyArray = [];

const foods = ["sup", "pizza", "pasta"];

// add element di last index
foods.push("indomie");
//hapus last index
foods.pop();

//add element di firstindex
foods.unshift("baso");
// hapus element di index pertama
foods.shift();

//display with indes
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

//display by looping
for (let i = 0 < foods.length; i++){
    // const element = array[i];
        console.log(foods[i]);
}

const s = "bootcamo codeid academy";
const arr = s.split(" ");


console.log();
