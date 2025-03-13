var containsDuplicate = function (nums) {
    let obj = {};
    let res = "";
    for (let i of nums) {
        obj[i] ? res = "true" : obj[i] = 1;
    }
    return res == "" ? false : true;
};