interface photo{
    mode : string,
    filter : string
}

class Instagram implements photo{
    //this class must be follow photo interface properties
    //this class can have it own properties also
    constructor(public mode:string, public filter : string){}
}

let abc = new Instagram("fast", "nature");


interface story{
    createStory(): void
}

class Youtube implements photo, story{
    constructor(
        public mode:string,
        public filter: string,
        public shorts : string                                   //Youtube class can have its own properties also
    ){}
        //use story interface function
        createStory() :void  {
        console.log("created");
        }
}