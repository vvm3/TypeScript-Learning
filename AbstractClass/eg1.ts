abstract class Team{
    //abstarct class
    constructor(
        public captain : NamedCurve,
        public staff : number,
        public name :string
    ){}

    //abstract method do not have body. 
    //provided by subclass
    abstract abc():void;

    //normal methods also exists in abstract class
    xyz(naam:string): string{
        return naam;
    }
}
//abstarct class can not create object
// let RR = new Team("sanju", 20, "Rajsthan");


class Winner extends Team{
    constructor(
        public captain :string,
        public staff : number,
        public name : string,
        public price : number
    ){
        super(captain,staff,name);
    }

    abc() : void{
        //override the abstract method from abstract class Team
        console.log("winner");
    }
}

let csk = new Winner("MSD", 28, "Chennai", 100000);

csk.abc();
console.log(csk.xyz("CSK"));

