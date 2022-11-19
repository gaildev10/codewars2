//Sum Two Smallest Integers
function sumTwoSmallestNumbers (numbers) { 
let [x,y] = numbers.sort((a,b)=> a-b)
return x + y
}
