// Predict Your Age
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1,age2,age3,age4,age5,age6,age7,age8];
  return Math.floor(Math.sqrt(ages
    .map((age) => age * age)
    .reduce((sum, age) => sum + age)) / 2
)}