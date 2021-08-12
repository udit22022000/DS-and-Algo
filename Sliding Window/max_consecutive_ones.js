// https://leetcode.com/problems/max-consecutive-ones/
 var findMaxConsecutiveOnes = function(nums) {
     var count = 0;
     var res = 0;
     for(var i=0; i<nums.length; i++){
         if(nums[i] == 0){
             res = Math.max(res,count);
             count = 0;
         }
         else{
             count += 1;
         }
     }
     res = Math.max(res,count);
     return res;
 };