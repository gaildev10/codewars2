//Name that number
function nameThatNumber(num) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens = [,,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        str = String(num)
    return str.length < 2 ? ones[num]
        : str[0] == 1 ? teen[num - 10]
        :`${tens[str[0]]}${str[1] == 0 ? ''  : ' ' + ones[str[1]]}`
    
  }
 