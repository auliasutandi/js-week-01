const fruitNamesA = ['rambutan', 'durian', 'jeruk','nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpuket'];
const fruitNamesC = ['mangga', 'anggur', 'alpuket', 'apel'];

function areArrayEqual(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        return false;
    } else if (array1 === array2){
        return true;
    }else if (array1.length !== array2.length){
        return false;
    }else{
        for (let i = 0; i < array1.length; i++) {
            if(array1[0] !== array2[i]) return false;
            
        }
    }
    return true;
}

console.log(areArrayEqual(fruitNamesA,fruitNamesB));
console.log(areArrayEqual(fruitNamesA,fruitNamesC));
console.log(areArrayEqual);
