//Thinkful - Number Drills: Blue and red marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blueRemaining = blueStart - bluePulled
  let redRemaining = redStart - redPulled
  return  blueRemaining / (blueRemaining  + redRemaining )
 
}