//
Enumerable Magic #4 - True for None?

function none(arr, fun){
  for(let i = 0; i<arr.length; i++){
    if(fun(arr[i])) {
      return false
    }
  }
  return true
}