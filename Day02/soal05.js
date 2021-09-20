function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            //hasil += 'i++';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(10));