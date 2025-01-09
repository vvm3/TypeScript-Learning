interface User {
    id : number,
    name : string,
    trail() : number,
    getMethod(abc:string): string
}

interface ABC extends User{                         //interface inheritance by using extends keyword
    role : string
}

let rohit : ABC = {
    id : 99,
    name:"Rohit",
    trail() {
        return 55
    },
    getMethod(abc: "r"){
        return "rSharma"
    },
    role : "Batsman"
}
