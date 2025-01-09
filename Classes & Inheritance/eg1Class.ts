// class User{
//     name : string
//     private email: string
//     constructor(name:string, email:string){
//         this.name = name,
//         this.email = email
//     }
// }


//shorter syntax
// class User{
//     constructor( public name:string, public email :string){
//         //just add public keyword
//     }
// }


//getter and setter
class User{
    name : string
    private email: string
    code : number
    constructor(name:string, email:string){
        this.name = name,
        this.email = email
    }

    get abc() : number{
        return this.code;
    }

    set xyz(num:number){
        this.code = num;
    }
}


let virat = new User("Virat", "vk@gmail.com");
console.log(virat.name);
// console.log(virat.email);                                    //email is private

console.log(virat.abc);
virat.xyz = 11;
console.log(virat.abc);






