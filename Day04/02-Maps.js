// MAP collection untuk menyimpan unique pair

const carts = new Map();
carts.set(1,"Indomie");
carts.set(2,"Kripik");
carts.set(3,"HP");
carts.set(2,"Kripik");

//carts.delete(3);

console.log(carts.size());

// display
for (const [key,value] of carts){
    console.log(key +" "+value);
}