var removeStars = function(s) {
    let str = [];
    for(let i = 0; i < s.length; i++){
      if(s[i] !== "*"){
          str.push(s[i])
      }
      else{
          str.pop();
      }
    }
    return str.join("");
};