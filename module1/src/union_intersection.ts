{


//UNION
/*
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'; 
type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'; 

type Developer = FrontendDeveloper | FrontendDeveloper ; //Types UNION

const newDeveloper : FrontendDeveloper = 'juniorDeveloper'; 


type User = {
    name : string; 
    emails ?: string; 
    gender :'male ' | 'female'; // UNION
}

const user1 : User ={
    name : 'Persian', 
    gender : 'male ',
}

*/

// INTERSECTION

type FrontendDeveloper = {
    skills : string[]; 
    designation1 : 'FrontendDeveloper'
}

type BackendDeveloper = {
    skills : string[]; 
    designation2: 'BackendDeveloper'
}


type FullstackDeveloper = FrontendDeveloper & BackendDeveloper 

const newDeveloper : FullstackDeveloper ={
    skills: ['HTML', 'JS', 'TS', 'Next JS'], 
    designation1:'FrontendDeveloper', 
    designation2: 'BackendDeveloper',     
}












}