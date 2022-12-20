//Merge two sorted arrays into one


function mergeArrays(arr1, arr2) {
    let combined = arr1.concat(arr2);
    combined = new Set(combined);
    combined = Array.from(combined);
    return combined.sort(( a, b)=> a-b);
  }
  