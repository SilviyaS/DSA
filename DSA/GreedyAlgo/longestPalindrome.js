var longestPalindrome = function(s) {
    let obj = {}
    let ans = 0;
    for(let i of s){
        obj[i] ? obj[i]++ : obj[i]= 1;
        if(obj[i] % 2 == 0){
         ans += 2;
        }
    }
     return s.length > ans ? ans + 1 : ans;
};