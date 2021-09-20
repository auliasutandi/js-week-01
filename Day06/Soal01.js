const students = ["asep","budi","charlie","budi","jeni","asep"];
const murid = {};
students.forEach(function(i) { murid[i] = (murid[i]||0) + 1;});
console.log(murid);