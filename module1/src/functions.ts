/*

{/* 
        Learning functions
    1. Normal Functions 2. Arrow Functions
*/ 
// NORMAL FUNCTION: 

/*

function add(num1 , num2){
    return num1 + num2;
}  // it will given an error cz num1 and num2 implicit. 


function add(num1 : number, num2 : number) : number // return type
{
    return num1 + num2;
}  
add(3, '23'); // given an error cz its would be number. 

// ARROW FUNCTION: 

const addArrow = (num1:number , num2: number) : number => num1 + num2; 

// OBJECT ---> FUNCTION ----> METHOD
const poorUser = {
    name : "mezba", 
    balance : 0, 
    addBalance(balance: number): string{
        return `my new balance is : ${this.balance + balance}`; 
    }, 
}


////
const arr : number[] = [1, 23 , 4 ]; 

const newArry : number[]= arr.map((ele : number) : number => ele * ele)
}



*/
