// https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
     var index = {};
     for(var i=0; i<nums.length; i++){
         var ele = nums[i]
         if(index[ele] == undefined){
             index[ele] = i;
         }
         else{
             if(Math.abs(i-index[ele]) > k){
                 index[ele] = i;
             }
             else{
                 return true;
             }
         }
         
     }
     return false;
 };