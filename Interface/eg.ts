interface User {
    id : number,
    name : string,
    trail() : number,
    getMethod(abc:string): string
}

let vk : User= {
    id:18,
    name:"virat",
    trail() {
        return this.id
    },
    getMethod(xyz: "bye") {
        return `hello ${xyz}`
    }
}

console.log(vk.name);


