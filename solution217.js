//Remove duplicates from list
function distinct(a) {
    let newSet = new Set(a)
    return Array.from(newSet)
  }