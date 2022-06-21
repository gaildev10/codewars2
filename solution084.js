//Array Means

var findAverage = function (nums) {
    let result = 0
    for (i=0; i <nums.length; i++){
      result += nums[i]
    }
     return result / nums.length
   }