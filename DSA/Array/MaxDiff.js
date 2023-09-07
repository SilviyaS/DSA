var maximumDifference = function(nums) {
    let max = -1;
    for(let i = 0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
          let diff = nums[j] - nums[i];
          max = Math.max(max, diff)
      }
    }
    let res = max > 0 ? max :  -1;
    return res;
};


// Input: nums = [7,1,5,4]
// Output: 4