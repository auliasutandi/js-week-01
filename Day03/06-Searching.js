const programing = ["java","js","python","golang","sql","oracle","postgres"];

const idxOracle = programing.indexOf("oracle");
const idxPostgres = programing.lastIndexOf("postgres");
const idxJava = programing.includes("java");

// searching by find first match
const nums = [2,4,19,15,198,7,1,1];
const bigNum = nums.find(element => element > 10);

// menampilkan element yang lebih dari 10
const bigNums = nums.filter(element => element > 10);

// method map 
const numbers = [2,3,4,5,6,10,15];
const byFive = numbers.map(element => element * 5);

//every
const every = numbers.every(el => el % 2 === 0); //return false

//some
const some = numbers.some(el => el % 2 === 0);//return true

console.log();