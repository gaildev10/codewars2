//Find the position!

function position(letter){
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let position = alpha.indexOf(letter.toLowerCase()) + 1;
    return `Position of alphabet: ${position}`;
      }