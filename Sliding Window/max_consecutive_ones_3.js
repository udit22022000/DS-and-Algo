// https://leetcode.com/problems/max-consecutive-ones-iii/


var longestOnes = function(nums, k) {
     var zero_count = 0;
     var res = 0;
     var start = 0;
     var end = 0;
     var len = nums.length
     while(end < len){
         
         if(nums[end] == 0){
             zero_count += 1;
         }
         
         if(zero_count <= k){
             res = Math.max(res,end-start+1)
         }
         
         else{
             while(zero_count > k){
                 
                 if(nums[start] == 0){
                     zero_count -= 1;
                     if(zero_count == k){
                         res = Math.max(res,end-start)
                     }
                 }
                 
                 start += 1;
             }
         }
         
         end += 1;
     }
     return res;
 }