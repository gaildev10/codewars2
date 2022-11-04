//shorter concat

shorter_reverse_longer = (a,b) => 
   a.length >= b.length ?  b + [...a].reverse().join("") + b
  : a + [...b].reverse().join("") + a