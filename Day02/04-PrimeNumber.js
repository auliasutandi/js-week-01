//prime : 2,3,5,7,11,13,17
/**
 * 5/2 !== 0
 * 5/3 !==0
 * 5/4 !==0
 * 5/5 === 0
 * 
 * 4/2 === 0 true
 */

function isPrimeNumber(n){
    if (n <= 1){
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (n % i === 0){
            return false;
        }
    }
    
    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(21));