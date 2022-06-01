//Get the mean of an array

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let newArr = marks.reduce((acc,c )=> acc + c)
    return Math.floor(newArr/marks.length)
  }
  getAverage()