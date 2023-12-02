{

///types :

type Student ={
    name : string; 
    age : number ; 
    contactNo: number; 
    gender : string; 
    address: string; 
} 

const student1: Student = {
    name : 'Mezba',
    age : 43, 
    contactNo: 4591823, 
    gender : "male", 
    address : "Mr X goli!"
}

type Username = string ; 
type IsAdmin = boolean ; 

const username : Username = 'Persian'; 
const isAdmin : IsAdmin = true; 

type Add = (num1: number , num2 : number) => number ; 

const add : Add = (num1,  num2  ) => num1 + num2 ;



}