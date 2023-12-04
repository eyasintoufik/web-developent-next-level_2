{
    //
    // class Counter {
    //     count : number = 0; 
    //     increment(){
    //         return this.count = this.count + 1; 
    //     }
    //     decrement(){
    //         return this.count = this.count + 1; 
    //     }
    // }
    // const counter1 = new Counter(); ///different memory
    // console.log(counter1.increment()); 

    // const counter2 = new Counter(); ///different memory 
    // console.log(counter2.increment()); 


    // class Counter {
    //     static count : number = 0; 
    //     increment(){
    //         return Counter.count = Counter.count + 1; 
    //     }
    //     decrement(){
    //         return Counter.count = Counter.count + 1; 
    //     }
    // }
    // const counter1 = new Counter(); 
    // console.log(counter1.increment()); ///same memory
    // console.log(counter1.increment()); ///same memory

    // const counter2 = new Counter(); 
    // console.log(counter2.increment()); ///same memory

    class Counter {
        static count : number = 0; 
        static increment(){
            return Counter.count = Counter.count + 1; 
        }
        static decrement(){
            return Counter.count = Counter.count + 1; 
        }
    }
    console.log(Counter.increment()); ///same memory
    console.log(Counter.increment()); 

    console.log(Counter.increment()); 
    console.log(Counter.increment()); 
    console.log(Counter.increment()); 




    
    //
}