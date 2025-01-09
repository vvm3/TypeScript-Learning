var user = {
    name: "virat",
    age: 38,
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    //we can pass object to function like this while declaration of function
}
createUser({ name: "rohit", isPaid: false }); //this is ok
// createUser({name:"rohit", isPaid:false, email:"r@gmail.com"})           //here is error
//error due to we pass extra key of object which not while declaration of function
var abc = { name: "rohit", isPaid: false, email: "r@gmail.com" };
createUser(abc); //here is no error
//when function returns object 
function course() {
    return { name: "typescript", price: 500 };
}
var a = course();
console.log(a);
