//Product Of Maximums Of Array (Array Series #2)

const maxProduct = (numbers, size) => 
  numbers.sort(( a, b) => b-a)
.slice(0,size)
.reduce((acc, c) => acc*c)