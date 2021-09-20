// async await

const product = (prodname)=>{
    return prodname
}

const pilihkategori = (prodname, kategori)=>{
    if ( prodname <= 0 && isNaN(prodname)){
        return "Samsumg A1"
    }
    if (kategori === "HP"){
        return "Samsung A1"
    }
}


// async await
const orderelek = async (barang)=>{
    const pilihbarang = getPilihBarang(2);
    const kategori = await pilihPaket(prodname,"HP")
    return [prodname, kategori]
}

orderelek("Samsung A1").then(response => console.log(response));


const tagihan = (prodname) => {
    if (prodname === "Samsung A1"){
        return 2500000;
    }
}




const orderelek2 = async (prodname) => {
    const [prodname, kategori, total] = await Promise.all([
        getPilihBarang(10),
        pilihPaket(10, "Samsung A1"),
        tagihan("Samsung A1")
    ]);
    return [prodname, kategori, total];
}
orderelek2("Dell Ultrabook").then(res => console.log(res))