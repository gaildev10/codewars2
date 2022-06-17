//Transpose Two Strings in an array
function transposeTwoStrings (array) {
	let result = [];
  let len = Math.max(array[0].length, array[1].length);
  
  for(let i = 0; i < len; i++){
    let column = (array[0][i] || " ") + " " + (array[1][i] || " ");
    result.push(column);
  }
  return result.join('\n');
}