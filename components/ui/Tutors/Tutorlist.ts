export interface TutorTypes{
    id:number,
    subject:string,
    name:string,
    exprience:number,
    rating:number,
    lessionCompleted:number,
    price:number,
    }

const Tutorlist:TutorTypes []=[
    {
        id:1,
        subject:'Math',
        name:'Fatima',
        price:30,
        lessionCompleted:150,
        rating:5,
        exprience:3,

    },
    {
        id:2,
        subject:'Physics',
        name:'Josh J',
        price:40,
        lessionCompleted:1750,
        rating:5,
        exprience:35,

    },
    {
        id:3,
        subject:'English',
        name:'Louise',
        price:50,
        lessionCompleted:100,
        rating:5,
        exprience:2,

    },
    {
        id:4,
        subject:'History',
        name:'Thomas',
        price:60,
        lessionCompleted:300,
        rating:5,
        exprience:6,

    },
    {
        id:5,
        subject:'Latin',
        name:'Eileen R',
        price:70,
        lessionCompleted:1300,
        rating:5,
        exprience:26,

    },
   
]
export default Tutorlist;