//Categorize New Member
function openOrSenior(data){
    let res = []
    for (let i = 0; i< data.length; i++){
      if( data[i][0] >= 55 && data[i][1] > 7){
        res.push( "Senior" )
      } else {
        res.push( "Open" )
      }
    }
  return res
  }