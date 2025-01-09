type User = {
    name: string,
    id:number
}

const allUser : User[] = [{name:"virat", id:18}];

allUser.push({name:"rohit", id:33});

//we can not do this - 
// allUser.push("sachin", 10);

