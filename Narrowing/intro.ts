//narrowing is not concept, but it is business logic
//in js/ts, typeof return type of value
// typeof 3 -> number
// typeof "abc" -> string
// typeof [] -> object
// typeof "" -> string
// typeof null -> object

function printAll(str:string | string[] | null){
    if(str){
        if(typeof str === "object"){
            for(let i of str){
                console.log(i);
            }
        }else if(typeof str ==="string"){
            console.log(str);
        }
    }
}

printAll("Virat");
printAll(["abc", "pqr", "xyz"]);
printAll([])
printAll("")
//when we pass empty array and string as per business requirment it should throw error
//but here it accept it