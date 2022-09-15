//Find the smallest integer in an array



class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       args.sort(function(a, b) {
//       return a - b; } )
//       return args[0];
//     }
//   }