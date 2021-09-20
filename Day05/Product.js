export default class Product{
    constructor(prodId,prodName,catergory,price=0,jmlBeli=1){
        this.prodId = prodId;
        this.prodName = prodName;
        this.catergory = catergory;
        this.price = price;
        this.jmlBeli = jmlBeli;
        this.subTotal = this.price * this.jmlBeli;
    }

    setPrice(price){
        this.price = price;
        return this.subTotal = this.price * this.jmlBeli;
    }

    setPriceJmlBeli(price,jmlBeli){
        this.price = price;
        this.jmlBeli = jmlBeli;
        return this.subTotal = this.price * this.jmlBeli;
    }

    toString(){
        return `prodId=${this.prodId}, prodName=${this.prodName},
        catergory=${this.catergory},price=${this.price},
        jmlBeli=${this.jmlBeli},subTotal=${this.price * this.jmlBeli}`
    }
}