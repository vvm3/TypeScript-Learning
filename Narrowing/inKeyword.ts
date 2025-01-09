interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function CheckIsAdmin(acc: User | Admin): boolean{
    if("isAdmin" in acc){
        return acc.isAdmin
        //by using 'in' keyword we can check whether that property present or not in passed argument
    }    
    return false;
}

let res = CheckIsAdmin({name:"virat", email:"vk@.com", isAdmin:true});
console.log(res);


let res2 = CheckIsAdmin({name:"virat", email:"vk@.com"});
console.log(res2);