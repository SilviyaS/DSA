function isomorphic(arr1, arr2) {
    let a = [];
    let b = [];
    if (arr1.length != arr2.length) return false;
    for (let i = 0; i <= arr1.length; i++) {
        a.push(arr1.indexOf(arr1[i]));
        console.log(a);
        b.push(arr2.indexOf(arr2[i]));
        console.log(b);
        if (a[i] != b[i]) return false;
    }
    return true;
}