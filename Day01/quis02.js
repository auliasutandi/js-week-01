function calculateDistance(a,t) {
    $theta = a + t; 
    //$distance = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta))); 
    //$distance = acos($distance); 
    //$distance = rad2deg($distance); 
    $distance = $distance * 0.5 * a * t / 2; 
    switch($unit) { 
      case 'miles': 
        break; 
      case 'kilometers' : 
        $distance = $distance * 1.609344; 
    } 
    return (round($distance,2)); 
  }

console.log(calculateDistance("a","t"));
console.log(calculateDistance(-1,9));
console.log(calculateDistance (50,60));