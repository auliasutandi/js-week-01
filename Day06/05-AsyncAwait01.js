// async await

//function getNomorAntri(nomor){

//}
async function getNomorAntri(nomor){
    if(nomor <= 10){
    return Promise.resolve(10);
    }else{
    return Promise.reject(new Error("Antrian habis"))
    }
    }


console.log(getNomorAntri(10));

getNomorAntri(15)
    .then(response => console.log(response))
    .catch(error => console.log(error));

console.log();