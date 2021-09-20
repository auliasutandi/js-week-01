const foods = ["sup","pizza","pasta"];

if (Array.isArray(foods)){
    console.log(`${foods} is array`)
}

for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    console.log(food);
    
}

//foreach hanya bisa dipanggil jika data berupa arrat,map, set
foods.forEach(food => console.log(food));