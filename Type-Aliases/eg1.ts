//creating custom types
type A = number;
type B = string;

let a:A = 99;
console.log(a);

let b:B = "hello";
console.log(b);


//object aliases
type Point = {
    x:number,
    y:number
}

function print1(abc:Point){
    console.log(abc.x);
    console.log(abc.y);
}

print1({x:12, y:87});
// print({a:77,b:55});                                 //gives error
//because you have to pass variables of Point type i.e. x and y
