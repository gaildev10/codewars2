//Well of Ideas - Easy Version

function well(x){
    let goodIdeas = 0
    
    for(let ideas of x){
      if( ideas === "good") goodIdeas += 1;
    }
    if( goodIdeas > 2) return  'I smell a series!';
      if( goodIdeas >  0) return  'Publish!';
      return "Fail!"
  }

//   function well(x) {
//     switch (x.filter(i => i === 'good').length) {
//       case 0:
//         return 'Fail!'
//       case 1:
//       case 2:
//         return 'Publish!'
//       default:
//         return 'I smell a series!'
//     }
//   }