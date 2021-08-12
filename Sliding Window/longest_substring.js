/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
 var lengthOfLongestSubstring = function(s) {
    
     var len = s.length;
     var start = 0;
     var end = 0;
     var freq = {};
     var flag = true;
     var result = 0;
     while(end < len){
         
         var ele = s[end];
         
         if(freq[ele] == undefined){
             freq[ele] = 0;
         }
         
         freq[ele] += 1;
         
         if(freq[ele] > 1){
             flag = false;
         }
         
         if(flag == true){
             result = Math.max(result,end-start+1)
         }
         else{
             while(flag != true){
                 
                 freq[s[start]] -= 1;
                 if(ele == s[start]){
                     flag = true;
                 }
                 
                 start += 1;
             }
         }
         
         end += 1;
     }
     
     return result;
 };