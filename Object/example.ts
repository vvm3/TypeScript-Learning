const user = {
    name:"virat",
    age: 38,
    isActive : true
}


function createUser({name: string, isPaid : boolean}){
    //we can pass object to function like this while declaration of function
}

createUser({name:"rohit", isPaid:false});                                   //this is ok

// createUser({name:"rohit", isPaid:false, email:"r@gmail.com"})           //here is error
//error due to we pass extra key of object which not while declaration of function

const abc1 = {name:"rohit", isPaid:false, email:"r@gmail.com"};
createUser(abc1);                                                            //here is no error


//when function returns object 
function course():{name:string,price:number}{
    return {name:"typescript", price: 500}
}

let a = course();
console.log(a);
