//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const going = mpg * fuelLeft;
     return going >= distanceToPump;
   };