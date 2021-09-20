//callback
const callCenter147 = () => {
    pesan("Selamat datang di layanan telkom 147",()=>{
        pesan("pilih angkat 1 untuk indonesia", ()=>{
            pesan("tekan angka 1 untuk pendaftaran",()=>{
                pesan("tekan angka 2 untuk keluhan",()=>{
                    pesan("tekan angka 3 untuk membatalkan",()=>{})
                })
            })
        })
    });   
}

const pesan = (message,callback)=>{
    setTimeout(()=>{
        console.log(message);
        callback();
    }, 2000);
}


callCenter147();