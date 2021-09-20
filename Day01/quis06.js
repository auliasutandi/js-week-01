function getCordinat(x1, y1, x2, y2) {
    if (isNaN(x1) / isNaN(y1) / isNaN(x2) / isNaN(y2)){
    return "input must an number";
}

const xTotal = parseFloat(x1) - parseFloat(x2);
const yTotal = parseFloat(y1) - parseFloat(y2);

const cordinat = math.sqrt(math.pow(xTotal, 2) + math.pow(yTotal, 2));

return `cordinat = ${cordinat}`;

}


console.log(getCordinat(3, 4, -4, -5));
console.log(getCordinat("1", "2", "-1", "-2"));
console.log(getCordinat("x", "2", "-y", "-2"));
console.log(getCordinat(3.2, 4.5, -4.4, -5));