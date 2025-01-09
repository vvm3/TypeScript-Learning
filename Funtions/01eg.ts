// let abc;                    //type will be 'any'
//to avoid above problem
let abc: string;
function xyz() {
    return "hello"
}
abc = xyz();                //no error and also abc type is shown as string
console.log(abc);           //no error because abc type is any


function user1 (name, email, age){
    return `information is --> ${name}, ${email}, ${age}`
}
let a1 = user1(1, 4, false);                                              // no error because type is any and that is problem
console.log(a1);


function user2 (name:string, email:string, age:number){
    return `info is --> ${name}, ${email}, ${age}`
}
// let a2 = user2(1,9,4);                                               //error
let a2 = user2("virat", "v@gamil.com", 38);
console.log(a2);



// arrow functions syntax
let x = (num:number):number => {
    return num
}
let x1 = x(7);
console.log(x1);

//in functions when we return something then write type of return value to function as above 


//when function nothing return
function pqr(num:number):void{
    console.log(num);
}
pqr(9);

//never type
//never type is mostly used where function or variable will never produce valid value or reach end of its execution
// catching programming errors
function pqr2(num:number):never{
    throw "nothing";
}