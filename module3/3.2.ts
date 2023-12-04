{
    //oop - inheritance 

    class Person {
        name: string; 
        age: number; 
        address: string;
        
        constructor(name:string , age: number, address: string ){
            this.name = name; 
            this.age = age; 
            this.address = address; 
        }

        getSleep(numOfHours : number) {
            console.log(`${this.name} will sleep for ${numOfHours} Hours`);
        }
    }


    class Student extends Person{
        constructor(name: string , age: number , address: string){
            super(name, age, address); 
        }
    }
    const Student1 = new Student("Mr. hello", 24, "nothing");
    Student1.getSleep(34); 
    class Teacher extends Person{
        designation : string; 
        constructor(name: string , age: number , address: string , designation : string){
            super(name, age, address); 
            this.designation = designation; 
        }
        takeClass(numOfClass : number){
            console.log(`${this.name} take classes number of ${numOfClass}`); 
        }
    }
    const teacher1 = new Teacher("Mr Hi", 34 , "university", "Teacher");
    teacher1.takeClass(123);  

    
    
    
    //

}