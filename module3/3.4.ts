{
    // instance of guard 
    
    class Animal {
        name: string; 
        species: string ; 

        constructor(name: string, species: string ){
            this.name = name ; 
            this.species = species; 
        }
        makeSound(){
            console.log("I am making sound");
        }
    }

    class Dog extends Animal{
        constructor(name : string, species : string) {
            super(name, species); 
        }
        makeBark(){
            console.log("I am Barking"); 
        }
    }
    class Cat extends Animal{
        constructor(name : string, species : string) {
            super(name, species); 
        }
        makeMeaw(){
            console.log("I am Meawing"); 
        }
    }

    //// uses function in smart ways : 

    const isDog = (animal : Animal) : animal is Dog => { /// animal is Dog one kind of boolean 
        return animal instanceof Dog; 
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat; 
    }

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeBark(); 
        }
        else if(isCat(animal)){
            animal.makeMeaw(); 
        }else{
            animal.makeSound(); 
        }
    }
    
    //// older useage : 
    // const getAnimal = (animal : Animal) => {
    //     if(animal instanceof Dog){
    //         animal.makeBark(); 
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeaw(); 
    //     }else{
    //         animal.makeSound(); 
    //     }
    // }


    const dog = new Dog("German sheferd", "dog"); 
    const cat = new Cat("Persian Bhai ", "Cat"); 

    getAnimal(dog); 








    //

}