//Fake binary

function fakeBin(x){
    let newX = ""
    for(const char of x){
        if(parseInt(char) < 5){
            newX += "0"
        } else {
            newX += "1"
        }
    }
    return newX
}


  