/**
https://leetcode.com/problems/minimum-size-subarray-sum/
*/
 var minSubArrayLen = function(target, nums) {
     var start = 0;
     var end = 0;
     var len = nums.length
     var sum = 0;
     var res = Infinity;
     while(end < len){
         
         sum += nums[end]
         
         while(sum >= target){
             res = Math.min(res,end-start+1)
             sum -= nums[start]
             start += 1;
         }
         
         end += 1;
     }
     
     if(res == Infinity){
         return 0;
     }
     return res;
 };