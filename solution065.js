//Barista problem

const barista = coffees => 
  coffees.sort((a, b)=>a-b)
  .reduce((prev, curr, index) => 
          prev + curr * (coffees.length - index) + 2 * index, 0)