type Fish = {
    swim(): void;
}

type Bird = {
    fly():void;
}

// function isFish(arg: Fish | Bird){
//     return (arg as Fish).swim !== undefined;
//     //arg as Fish is typecasting
// }

// function Food(spe: Fish | Bird){
//     if(isFish(spe)){
//         spe
//         //hover on spe, TS will still confuse that it is type of Fish or not
//         return "Fish food"
//     }else{
//         spe
//         return "Bird food"
//     }
// }



//to avoid this confuse problem

function isFish(arg: Fish | Bird): arg is Fish {
    return (arg as Fish).swim !== undefined
    //now return type will be Fish 
}

function Food(spe: Fish | Bird){
    if(isFish(spe)){
        spe
        //here type is fish
        return "Fish food"
    }else{
        spe
        //here type is bird
        return "Bird food"
    }
}
