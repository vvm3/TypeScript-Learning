//narrowing is not concept, but it is business logic
//in js/ts, typeof return type of value
// typeof 3 -> number
// typeof "abc" -> string
// typeof [] -> object
// typeof "" -> string
// typeof null -> object
function printAll(str) {
    if (str) {
        if (typeof str === "object") {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var i = str_1[_i];
                console.log(i);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}
printAll("Virat");
printAll(["abc", "pqr", "xyz"]);
printAll([]);
