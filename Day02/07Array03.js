// copy array

const employees = ["andi","charlie","delta","gita","hari","zeni"];

//same references
const empsAll = employees;

employees.push("iqbal");

//copy array
const Permanent = Array.of(employees);

const freelance = ["dian","budi"];

//concat array
const contractEmps = Permanent.concat(freelance);

contractEmps.length =0;

console.log();