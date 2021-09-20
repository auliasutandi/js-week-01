const numbers = [3,4,5,6,7];
// spread operator selalu disimpan di sebelah kanan =
const numbeCopy = [...numbers];

numbers.push(10);

//merging two arrat
const ganjil = [1,3,5,7];
const genap = [2,4,6,8];
// large array concat
const bilangan = ganjil.concat(genap);

//spread operator bisa ditampilkan dengan element lain
const gage = [...ganjil,...genap];

console.log(gage);