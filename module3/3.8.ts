{
    // polymorphism 
    class Person {
        getSleep(){
            console.log(`I am sleeping for 8 hours `); 
        }
    }
    class Student extends Person {
        getSleep(){
            console.log(`I am sleeping for 7 hours `); 
        }
    }
    class Developer extends Person {
        getSleep(){
            console.log(`I am sleeping for 6 hours `); 
        }
    }
    
    const getSleepingHours = (param : Person) =>{
        param.getSleep(); 
    }

    const person1 = new Person(); 
    const person2 = new Student(); 
    const person3 = new Developer(); 
    getSleepingHours(person1); 
    getSleepingHours(person2); 
    getSleepingHours(person3); 

    /// another example 
    class Shape {
        getArea() : number {
            return 0; 
        }
    }

    class Circle extends Shape{
        redius :  number; 

        constructor(redius: number){
            super(); 
            this.redius = redius; 
        }
        getArea() : number{
            return Math.PI * this.redius * this.redius ; 
        }
    }
    class Rectangle extends Shape{
        height :  number;
        width: number;  

        constructor(height : number , width: number){
            super(); 
            this.height = height ; 
            this.width =  width; 
        }
        getArea() : number{
            return  this.height * this.width;  
        }
    }

    const getShapeArea = (param: Shape ) =>{
        console.log(param.getArea()); 
    } 

    const shape1 = new Shape(); 
    const shape2 = new Circle(2); 
    const shape3 = new Rectangle(34, 2); 

    getShapeArea(shape3); 








    //
}