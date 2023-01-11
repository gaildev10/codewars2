//Correct the mistakes of the character recognition software

function correct(string){
	let newString = ""
  for(const char of string){
    if(char == "5") {
      newString += "S"
    } else if (char == "0"){
      newString += "O"
  } else if (char == "1"){
      newString += "I"
    } else {
      newString += char
    }
  }
  return newString
}