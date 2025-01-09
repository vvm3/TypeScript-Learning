//readonly keyword
let abc : readonly number[] = [1,3,1];
// abc.push(12);                                //error

type User = {
    readonly id: number,
    name: string,
    isActive: boolean
}
let myUser: User = {
    id: 11,
    name: "virat",
    isActive: true
}
// myUser.id = 99;                                 //error because it is readonly
myUser.name = "rohit"                               //no error
