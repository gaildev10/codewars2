//Greet me

function greet (name){ 
  let capLetter = name[0].toUpperCase()
  let lowerLetters = name.slice(1).toLowerCase()
  return `Hello ${capLetter}${lowerLetters}!`

}
