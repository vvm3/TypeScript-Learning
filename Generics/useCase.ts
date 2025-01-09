//multiple generics type
function myFun<T, U>(val1:T, val2:U):object{
    return{
       val1,
       val2
    }
}

myFun( 9, "hello");
myFun(true, 5);
//check type by hover on this




//2nd use case is you can extends another type in generic type
function myFun2<T, U extends number>(val1:T, val2:U):object{
    return{
       val1,
       val2
    }
}

// myFun2(6, "bye");               //error. because we extends number in U type
myFun2(6, 5);
//when hover on function name 5 will not be show as number type it shows as type of 5 itself



//3rd use case is we can extends interface
interface User{
    name:string,
    id:number
}

function myFun3<T, U extends User>(val1:T, val2:U):void{
   console.log(val1);
    console.log(val2);
}

myFun3(3, {name:"virat", id:1});
