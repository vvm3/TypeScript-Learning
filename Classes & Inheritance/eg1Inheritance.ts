class UserInheriate {
    name: string
    private email: string
    code: number
    protected team : string
    constructor(name: string, email: string) {
        this.name = name,
            this.email = email
    }

    get abc(): number {
        return this.code;
    }

    set xyz(num: number) {
        this.code = num;
    }
}

class User2 extends UserInheriate {
    role: string
    // constructor(name: string, email: string){
    //     super(name, email)
        //if you write constructor in subclass you have to call parent class constrcutor
        //if you do not write constructor in subclass then TS will create for you
    // }

    set setTeam(naam :string)  {
        this.team = naam;                       //team only accessed inside UserInheriate and User2 class
    }
    get getTeam():string{
        return this.team;
    } 
}

let Jadeja = new User2("Ravindra J", "j@ravi.com");
Jadeja.role = "all rounder";

console.log(Jadeja.abc);
Jadeja.xyz = 333;
console.log(Jadeja.abc);
console.log(Jadeja.role);
console.log(Jadeja.name);
Jadeja.setTeam = "CSK"
console.log(Jadeja.getTeam);
