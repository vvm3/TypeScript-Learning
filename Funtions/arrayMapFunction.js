// const arr = ["abc", "xyz", "pqr"];
var arr = [10, 99, 55];
// arr.map((i)=>{                              //here i type is string as per array if we change array to number 
//     console.log(i);                           //i type will change automatically in number
// })
var arr1 = arr.map(function (i) {
    return i;
});
console.log(arr1);
