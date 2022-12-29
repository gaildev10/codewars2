//Multiple of Index

function multipleOfIndex(array) {
    return array.filter((element, index)=> element % index == 0)
  }