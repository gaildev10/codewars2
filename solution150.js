//Training JS #8: Conditional statement--switch
function howManydays(month){
 
    switch (month){
      case 2:
        return 28
        break;
        case 4:
        case 6:
        case 9:
        case 11:
        return 30
        break;    
    }
    return 31;
  }
  