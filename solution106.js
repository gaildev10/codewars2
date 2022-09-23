//Which did you scroll to

// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes, sum=0){
    return sizes.findIndex(element => (sum += element) > scrollY)
 }