// antrian sync

const antrian1 =()=>{
    console.log("Antrian 1 : Beli KFC Pakret A");
}

const antrian2 =()=>{
    setTimeout(() =>{
console.log("Antrian 2 : Beli KFC Haburge"); 
    }, 2000);
}

const antrian3 =()=>{
    console.log("Antrian 3 : Beli KFC Pakret C"); 
}

const antrian4 =()=>{
    setTimeout(() => {
        console.log("Antrian 4 : Beli Sup Ayam"); 
    }, 1000);
}

antrian1();
antrian2();
antrian3();
antrian4();