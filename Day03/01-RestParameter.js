function cetakAngka(n1,n2,n3,n4,n5,n6){
    return n1+" "+n2+" "+n3+" "+n4;
}

function cetakNumber(...number){
    return number+" "
}

function sumNumber(...number){
    let sum =0;
    for (let i = 0; i < number.length; i++) {
       // console.log = (number[i]);
        sum = sum + number[i];
    }
    return sum;
}

console.log(cetakAngka(1,2,5,4));
console.log(cetakNumber(4,5,7,8,10,98,12,12,343,3434));
console.log(sumNumber(1,2,5,4));