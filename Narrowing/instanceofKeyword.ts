//instanecof keyword will check instance or obejct of class or not like typeof
let date = new Date();
// Date is bydeafult class in js/ts 
let abc = 99;
function checkObj(arg){
    if(arg instanceof Object){
        console.log("arg is object type");
    }else{
        console.log("arg is not object type");    
    }
}

checkObj(date);
checkObj(abc)