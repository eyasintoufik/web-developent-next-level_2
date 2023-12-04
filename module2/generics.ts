{
//generic type :

type GenericArray<T> = Array<T>    ////////for dynamic "T means params , type of Array: string, number etc

// const rollNumbers : number[] = [2,3,4,5];
const rollNumbers : GenericArray<number> = [2,3,4,5];

// const mentors: string[] = ["Mr. X", "Mr.Y", "Mr.Z"]; 
const mentors: GenericArray<string> = ["Mr. X", "Mr.Y", "Mr.Z"]; 

// const boolean : boolean[] = [true, false, true]; 
const boolean : GenericArray<boolean> = [true, false, true]; 

///Array of object: 
const user : GenericArray<{name : string, age: number}> = [
    {
        name : "Eyasin", 
        age: 100, 
    },
    {
        name: "Bhuiyan",
        age: 12, 
    }
]

//Generic Tuple : 

type GenericTuple<X,Y> = [X,Y]; 
const human : GenericTuple<string, string> = ['Mr. X', 'Mr. Y']; 
const UserwithID: GenericTuple<number, {name: string, email:string}> = [123, {name:'Mr.X', email:'a@gmail.com'}]


//interface - Generic : 

interface Developer<T, X = null>{
    name: string; 
    computer: {
        brand: string; 
        model: string; 
        releaseYear: number; 
    }; 
    smartWatch: T; 
    bike?: X;
}

/*
const poorDeveloper : Developer<{
    brand: string; 
    model: string; 
    display: string; 
}> = {
    name: 'Mr.X', 
    computer: {
        brand: 'macbook', 
        model: 'Air', 
        releaseYear: 2012, 
    },
    smartWatch: {
        brand: 'Emilab', 
        model: 'kw66',
        display: "OLED"
    }
}
*/
// for simplyfy : 
type EmilabWatch = {
    brand: string;
    model: string; 
    display: string; 
}

const poorDeveloper : Developer<EmilabWatch> = {
    name: 'Mr.X', 
    computer: {
        brand: 'macbook', 
        model: 'Air', 
        releaseYear: 2012, 
    },
    smartWatch: {
        brand: 'Emilab', 
        model: 'kw66',
        display: "OLED"
    }
}

interface AppleWatch {
    brand: string; 
    model: string; 
    hearTrack : boolean; 
    sleepTrack : boolean; 
}
interface YamahaBike {
    brand: string; 
    engineCapacity: string; 
}
const richDeveloper : Developer<AppleWatch,YamahaBike> = {
    name: 'Mr.X', 
    computer: {
        brand: 'macbook', 
        model: 'Air', 
        releaseYear: 2012, 
    },
    smartWatch: {
        brand: 'AppleWatch', 
        model: 'Rich',
        hearTrack: true, 
        sleepTrack: true,
    }, 
    bike: {
        brand: "Yamaha", 
        engineCapacity: "250CC"
    }
}

// Functions with generics :


const crateArray = (param: string) : string[] =>{
    return [param]; 
}

const createArrayWithGeneric =<T>(param: T) :T[] =>{
    return [param]; 
}

const res1 =crateArray('Bangladesh'); 
const resGeneric = createArrayWithGeneric<string>('Bangladesh'); 
const resGeneric1 = createArrayWithGeneric<boolean>(true); 

type User ={id: number, name: string}

const resGenericObj = createArrayWithGeneric<User>({
    id: 222, 
    name: 'Mr.x',
}); 


// Touple with generics functions : 


const createArrayWithGenericTuple =<T, Q>(param1: T, param2:Q) :[T,Q] =>{
    return [param1, param2]; 
}

const res2 =createArrayWithGenericTuple('Bangladesh', "Dhaka"); 
const resGenericT2 = createArrayWithGenericTuple<string, {name: string}>('Bangladesh', {name : 'Asia'}); 
const resGeneric2 = createArrayWithGeneric<boolean>(true); 


const addCourseToStudent =<T>(student : T)=>{
    const course ='Next Level Web Development'
    return {
        ...student, 
        course 
    }
}

const student1 = addCourseToStudent({name:"Mr X", email:'x@gmail.com', devType: 'NLWD'})
const student2 = addCourseToStudent({name:"Mr X", email:'x@gmail.com', hasWatch: 'Apple Watch'})




















}