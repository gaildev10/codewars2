//Changing Letters

function swap(string){
    let result = ""
    for(let i = 0; i < string.length; i++ ){
        if(string[i]== "a"){
            result += "A"
        }
        else if(string[i]== "e"){
            result += "E"
        }
        else if(string[i]== "i"){
            result += "I"
        }
        else if(string[i]== "o"){
            result += "O"
        }
        else if(string[i]== "u"){
            result += "U"
        } else {
            result += string[i]
        }
    }
    return result
}