// ? - when we there is optional thing then while declaration we use ? 

// type User = {
//      id: number,
//     name: string,
//     isActive: boolean
//     card: number
// }

// let myUser: User = {                //here is error that card is missing
//     id: 11,                          //but I want card optional thing 
//     name: "virat",
//     isActive: true
// }

type User = {
    id: number,
   name: string,
   isActive: boolean
   card ?: number
}

let myUser:User = {                         //here is no error
    id :11,                                 //because card is optional now
    name:"virat",
    isActive:false
}

let myUser2:User = {                         //here is also no error
    id :11,                                 
    name:"virat",
    isActive:false,
    card : 9898
}