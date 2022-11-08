//Hightest and Lowest

function highAndLow(numbers){
    let newNums = numbers.split(' ')
    return `${newNums.sort((a,b) => b - a)[0]} ${newNums.sort((a,b) => a - b)[0]}`
  }