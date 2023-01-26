//Cats in hats

function height(n) {
    let first = 2000000,
        result = 0
    for(let i=0; i<=n; i++){
      result += first / 2.5 ** i
    }
     return result.toFixed(3)
   }