//shortest word

const findShort = (s) => 
  Math.min(...s.split(" ").map(element => element.length))
