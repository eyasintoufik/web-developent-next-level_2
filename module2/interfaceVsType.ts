{
//interface: 
/*
type User =  {
    name: string; 
    age : number; 
}

// premitive type like : "type rollNumber = number" we use type : for object type :we can use both, interface and type 



interface  User2 {
    name :string; 
    age: number; 
}


const user1 : User ={
    name : "Eyasin", 
    age: 29,
}

*/
// now:


type User1 ={
    name:string; 
    age: number; 
}


type UserWithRoll = User1 & {role : string}; 

const user1 : UserWithRoll ={
    name: "Eyasin", 
    age: 100, 
    role: "manager" // 
}


////using interface : 

interface User2 {
    name:string; 
    age: number; 
}


interface UserWithRoll2 extends User2 {
    role: string; 
} 

const user2 : UserWithRoll2 ={
    name: "Eyasin", 
    age: 100, 
    role: "manager" // 
}

// for array declaration : 

type Roll1 = number[]; 

//how we can do it in interface :
interface Roll2 {
    [index : number] : number; 
}

const rollNumber : Roll2 = [1, 2 , 4]; 

// in Function : 

type Add = (num1 : number , num2 : number ) => number;

interface Add1{
    (num1: number, num2 : number) : number
}
const add : Add1 = (num1 , num2) => num1 + num2; 
const add1: Add = (num1 , num2) => num1 + num2; 





}