interface Mobile{
    brand :  string,
    price : number
}

function handet<t>(variable: t) : void{
    console.log(variable);
}

handet({brand:"samsung", price:33000});