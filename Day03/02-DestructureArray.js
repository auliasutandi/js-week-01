//destructure array
const programing = ["java","js","python","golang","sql","oracle","postgres"];

//const java = programing[0];
//const js = programing[1];

const [java,js,python,go,...db] = programing;

//tidak menampilkan sisa
//const [java,js,python,go,,,,] = programing;

console.log(programing(2));