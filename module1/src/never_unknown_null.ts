{

// nullable types:

const searchName = (value : string | null) =>{
    if(value){
        console.log('Searching');
    }else{
        console.log('There is nothing to search');
    }
}

searchName('hello');
searchName(null);


///unknown types: 


/*

const getSpeedInMeterPerSecond = (value:unknown) =>{  //// we don't know 
    if(typeof value ==='number'){
        const convertedSpeed = value * 1000; 
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    if(typeof value === 'string'){
        // const valueInNumber = value.split(' ');
        const [valueInNumber, unit] = value.split(' ');
        //console.log(valueInNumber);
        const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600; 
        console.log(`The speed is ${convertedSpeed} ms^-1`);
    }
    else{
        console.log(`please insert a correct value`);
    }
}

getSpeedInMeterPerSecond('2345 km^-1'); 

*/

// never operator :

const throwError = (msg: string):never =>{
    throw new Error(msg); 
}

throwError("Muskil se error hogaye"); 


















}