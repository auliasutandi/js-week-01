function howManykabisat(){
    var result; 
    years = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = true
    }
    else if(years/100){
      result = false
    }
    else if(years/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }

 console.log(howManykabisat(1997,2021));