

const mypromise = new Promise((resolve, reject) => {
    if ((Math.random() * 10) <= -1){
        resolve(`lunas yaa....!`);
    }
    reject(new Error(`Belum ada uang, ntar besok yah ...`));
})

// call function mypromise>mypromise
mypromise
    .then(response => console.log(response))
    .catch(error => console.log(error));
//.catch(err => console.log(err));