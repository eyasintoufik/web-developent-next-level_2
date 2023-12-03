{
//TERNARY OPERATOR :

/*
const age : number = 15 ; 
if(age >= 18){
    console.log('Adult');
}
else {
    console.log('not Adult');
}



const isAdult = age >=18 ? 'Adult' : 'Not Adult'; 
console.log({isAdult});

*/
// Nullish coalescing operator : 

// when we have to deal with null/undefine nullish coalescing operator may help like :

const isAuthenticated = null; // null/ undefined

const result1 = isAuthenticated ?? 'Guest'; // nullish operator : ??
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; 

console.log({result1}, {result2});


type User = {
    name : string;
    address: {
        city : string; 
        road: string; 
        presentAddress: string; 
        permanentAddress?:  string; 
    }
}; 

const user : User = {
    name: 'Eyasin', 
    address: {
        city: 'dhaka', 
        road: 'Bashundhara', 
        presentAddress : 'Cumilla',
    },
}; 

const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address'; 

console.log({permanentAddress});



}