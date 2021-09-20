// declaration date
const today = new Date();
console.log(today.getDay());
console.log(today.getMonth());//
console.log(today.getFullYear());

//get info tome
const hours = today.getHours();
const minute = today.getMinutes();
const second = today.getUTCSeconds();

console.log(`jam ${hours}:${minute}:${second}`);

//declaration date with argument
const tomorrow = new Date(2021,8,8);
console.log(tomorrow);

//declaration date with time
const evenDate = new Date("2021-08-12T03:12:00z");
console.log(evenDate);

//adding date
const addDate = new Date();
const currentDate = now.getDate();
now.setDate(now.getDate()+3);
console.log(`booking date : ${now}`);

//compare bettween date
const startDate = new Date (2021,8,7);
const endDate = new Date(2021,8,15);

const selisihDate = endDate - startDate;

console.log(`Selisih date : ${selisihDate}`);

if (endDate > startDate){
    console.log(`${endDate} > ${startDate}`);
}

const milliSecondPerDay = 1000 * 60 * 60 *24;
let countDay = selisihDate / milliSecondPerDay
console.log(countDay);
