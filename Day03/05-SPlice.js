const programing = ["java","js","python","golang","sql","oracle","postgres"];

// get index sql = 4
const sql = programing.indexOf("sql");
//menghapus element mulai dari index ke 4 s/d terakhir
programing.splice(sql);

//console.log(programing.splice(4,2));
//menghapus element di index ke 4 s/d index ke 5
console.log(programing.splice(4,2,".NET","sqlserver"));

console.log();