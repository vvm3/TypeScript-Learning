// let abc;                    //type will be 'any'
//to avoid above problem
var abc;
function xyz() {
    return "hello";
}
abc = xyz(); //no error and also abc type is shown as string
console.log(abc); //no error because abc type is any
function user1(name, email, age) {
    return "information is --> ".concat(name, ", ").concat(email, ", ").concat(age);
}
var a1 = user1(1, 4, false); // no error because type is any and that is problem
console.log(a1);
function user2(name, email, age) {
    return "info is --> ".concat(name, ", ").concat(email, ", ").concat(age);
}
// let a2 = user2(1,9,4);                                               //error
var a2 = user2("virat", "v@gamil.com", 38);
console.log(a2);
// arrow functions syntax
var x = function (num) {
    return num;
};
var x1 = x(7);
console.log(x1);
//in functions when we return something then write type of return value to function as above 
