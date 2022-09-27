//Even numbers in an array

function evenNumbers(array, number) {
    let newArray = [];
    for(let i=0; i<=array.length; i++)
      if(array[i] % 2 === 0)
        newArray.push(array[i])
        return newArray.splice(newArray.length - number, number)
    
  }