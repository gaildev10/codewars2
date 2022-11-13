//Remove String Spaces

function noSpace(x){
let newStr = ""

for(let i = 0; i<x.length; i++)
  if(x[i] !== " "){
    newStr += x[i]
  }
  return newStr
}