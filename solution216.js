//Sum of Multiples

function sumMul(n,m){
    if(m <= n) return "INVALID"
  let x = 0
  for(let i = n; i<m; i+=n){
    x += i
  }
    return x
  }