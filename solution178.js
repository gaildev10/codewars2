//Divide and Conquer
let divCon = (x) => {
let result = 0
for(let i = 0; i<x.length; i++){
  if(typeof x[i] == "number"){
    result += x[i]
  } else {
    result -= Number(x[i])
  }
}
  return result
}