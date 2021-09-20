/**
 * price = 4500 
 *tax = 5 = 0.05
 total = 4500 + (4500 * 0.05)
 */

function getSalesTax(price, tax) {
    if (isNaN(price) && isNaN(tax)) {
        return `price harus dalam angka`
    } else if (isNaN(price)) {
        return `price harus dalam angka`
    } else if (isNaN(tax)) {
        return `tax harus dlm angka`
    }

    //hitung total sales + pajak
    const total = price + (price * (tax / 100));
    return `\tPrice = ${price}
        Pajak = ${(price * (tax / 100))}
        Total Price = ${total}`
}


console.log(getSalesTax(4500, 5));