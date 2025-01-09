//when we use either type value (|)

let a1 :number | string ;
a1 = 12;
a1 = "heelo"


//type object
type User = {
    name: string,
    id: number
}

type Admin = {
    username:string,
    id:number
}

const ABC : User | Admin = {
    name:"Virat",
    id:18
}

const XYZ : User | Admin = {
    username : "Dhoni",
    id : 7
}