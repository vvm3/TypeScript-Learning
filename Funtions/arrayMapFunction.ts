// const arr = ["abc", "xyz", "pqr"];
const arr = [10,99,55];

// arr.map((i)=>{                              //here i type is string as per array if we change array to number 
//     console.log(i);                           //i type will change automatically in number
// })

const arr1 = arr.map((i):number =>{                             
    return i;                    //in functions when we return something then write type of return value to function
})
console.log(arr1);
