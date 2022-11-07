//Disemvowel Trolls

function disemvowel(str) {
  let newStr = ""
  for(let i = 0; i<str.length; i++)
    if(!'aeiou'.includes(str[i].toLowerCase())){
      newStr+=( str[i])
    }
  return newStr;
}