//Complimentary DNA
function DNAStrand(dna){
    let res = ""
    
    for(let i = 0; i<dna.length; i++){
      if( dna[i]=== "A"){
        res += "T"
      } else if ( dna[i]=== "T"){
        res += "A"
    } else if ( dna[i]=== "C"){
        res += "G"
    }else if ( dna[i]=== "G"){
        res += "C"
    }
      
  }
    return res
    }