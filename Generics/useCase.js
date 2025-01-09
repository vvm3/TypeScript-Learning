//multiple generics type
function myFun(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
myFun(9, "hello");
myFun(true, 5);
//check type by hover on this
//2nd use case is you can extends another type in generic type
function myFun2(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
// myFun2(6, "bye");               //error. because we extends number in U type
myFun2(6, 5);
function myFun3(val1, val2) {
    console.log(val1);
    console.log(val2);
}
myFun3(3, { name: "virat", id: 1 });
