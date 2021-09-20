// fungsi untuk menghitung luas lingkaran
function getAreaCircle(length)
{
    return 1/4 * 3.14 * length * length;
}
// menghitung luas berdasarkan diameter
var diameter = 14;
var luas = getAreaCircle(diameter);

// menghitung luas berdasarkan jari-jari
var radius = 14;
var luas = getAreaCircle(radius, false);

console.log(getAreaCircle('-1'));
console.log(getAreaCircle('a'));
console.log(getAreaCircle(5));