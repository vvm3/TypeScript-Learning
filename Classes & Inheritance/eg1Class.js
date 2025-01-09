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
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name,
            this.email = email;
    }
    Object.defineProperty(User.prototype, "abc", {
        get: function () {
            return this.code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "xyz", {
        set: function (num) {
            this.code = num;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var virat = new User("Virat", "vk@gmail.com");
console.log(virat.name);
// console.log(virat.email);                                    //email is private
console.log(virat.abc);
virat.xyz = 11;
console.log(virat.abc);
