const startDate = new Date (2021,03,09);
const endDate = new Date(2021,03,09);

const selisihDate = endDate - startDate;

function tagihanKomik(JmlHari , JmlBuku){
    return JmlHari * JmlBuku
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021",4));
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
