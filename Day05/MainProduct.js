import Product from "./Product.js";

const prod1 = new Product(1,"Samsung A1","HP",1500000,2);
prod1.jmlBeli = 4;
prod1.Price = 1000;
prod1.setPrice(1000);
prod1.setPriceJmlBeli(200,20);

const prod2 = new Product(2,"Dell Ultrabook","COMPUTER",7850000,2);
const prod3 = new Product(3,"Mesin CUci Lg","ELECTRONIC",3500000,1);
const prod4 = new Product(4,"iphone","HP",6000000,2);
const prod5 = new Product(5,"Asus Laptop","COMPUTER",6500000,4);

//declare listchar
let listCart =[];

function addToCart(product){
    listCart = [...listCart,prod1];
    return listCart;
}

addToCart(prod1);
addToCart(prod2);
addToCart(prod3);
addToCart(prod4);
addToCart(prod5);

//display all product
function findAllProduct(array=[]){
    return array;
}
console.log(findAllProduct(listCart));

// anonymous function
(hello)=>{
    console.log(hello)
}

//filter product by category dengan prameter hardcore;
//const listCategory = listCart.filter((el)=> el.category === "HP");

function listProductByCategory (category){
    return listCart.filter((el)=> el.category === category);
}

const listCategory = listProductByCategory("COMPUTER");
console.log(listCategory);

const totalTagihan = listCart.reduce((sum,val)=>sum+val.subTotal,0);
console.log(`Total Tagihan = ${totalTagihan}`);

(sum,val)=>{
    
}

//display total tagihan subtotal dengan diskon
const subTotalDiscount = listCart.reduce((sum,val)=>{
    if(val.jmlBeli > 1){
        return sum + (val.subTotal - (val.subTotal * 10/100));
    } else{
        return sum + val.subTotal;
    }
},0)
console.log(`Total Tagihan + discount =${subTotalDiscount}`);

//reduce (param1,param2), param1 = anonymouse function, param2 = initial value

//display total tagihan subtotal diskon dengan with ternary operation
const subTotalDiscount2 = listCart.reduce((sum,val)=> val.jmlBeli > 1 ? sum + (val.subTotal - (val.subTotal *10/100)) :sum + val.subTotal , 0)

console.log(`total tagihan + discount2 = ${subTotalDiscount2}`)

// insert product to array listcart
//listCart = [...listCart,prod1];
//listCart = [...listCart,prod2];
//listCart = [...listCart,prod3];
//listCart = [...listCart,prod4];
//listCart = [...listCart,prod5];

console.log(prod1.toString());

console.log();