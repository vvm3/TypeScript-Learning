var a = 99;
console.log(a);
var b = "hello";
console.log(b);
function print1(abc) {
    console.log(abc.x);
    console.log(abc.y);
}
print1({ x: 12, y: 87 });
// print({a:77,b:55});                                 //gives error
//because you have to pass variables of Point type i.e. x and y
