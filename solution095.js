//implement array.prototype.filter()

Array.prototype.filter = function (func) {
    let result = []
    
    for (i = 0; i<this.length; i++){
      if(func(this[i])){ 
      result.push(this[i])
       }
    }
     return result
   }