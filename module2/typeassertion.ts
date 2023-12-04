{

/// type assertion means better type we understand then compiler. 

let anything : any; 
anything ="next Level web development"; 
anything. /// after . nothing showed up ! means typeScript don't understand the type of "anything"

// now
let something : any; 
something = "Next Level ";
(something as string).  // after . compiler suggest all of suggestions related to string


const KgToGm =(value : string | number ) : string | number | undefined =>{
    if(typeof value === "string"){
        const convertedValue = parseFloat(value) * 1000; 
        return `The converted value is : ${convertedValue}`
    }
    if(typeof value === "number"){
        return value * 1000; 
    }
}

const  result1 = KgToGm('1000') as string; 
const result2 =KgToGm(1000) as number; 


type CustomError = {
    message : string; 
}

const customError : CustomError = {
    message : 'This is wrong message', 
}; 

try{

}catch(error){
    console.log((error as CustomError).message);
}





}