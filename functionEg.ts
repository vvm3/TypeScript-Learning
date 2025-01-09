function abc(id: number | string){
    // id.toLowerCase();                               //error because id could be number
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }
    console.log(id);
}

abc(99);
abc("100");