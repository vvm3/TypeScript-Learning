// &(ampersand) - obejct intersection types are way to create new types by combining multiple types into single type

type cardDate = {
    date:string
}
type cardNumber = {
    number : string
}


type cardDetails = {
    date:string
}  &
{
    number : string
}   &
{
    cvv : number
}
//above method is complex. so we use object intersection by using & and above two object type

type cardDetails2 = {
    cvv: number
} & cardDate & cardNumber

let abc : cardDetails ={                //by using cardDetails
    date : "1 jav 2025",
    number : "iop 2025252",
    cvv :  20250101
}

let abc2 : cardDetails2 ={              //by using cardDetails2
    date : "1 jan 2025",
    number : "iop 2025252",
    cvv :  20250101
}