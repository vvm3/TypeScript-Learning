const data1:number[] = [1,9,5];
const data2:string [] = ["hello", "virat"];
const data3:number [] | string []= ["hii", "byee"];
const data4:number [] | string []= [99,77,55,33,11];
// const data5:number[] | string [] = ["hii", 44];
//error, we can not mixed these data types in one array. for mixing -
const data6:(number | string) [] = ["hello", 5];


//another example of union
let pqr1: "virat" | "Dhoni";
pqr1 = "virat";
pqr1 = "Dhoni";
// pqr1 = "Sachin";                                         //error. 

