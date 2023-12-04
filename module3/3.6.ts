{
    // getter and setter 
    class BankAccount {
        public readonly id: number; 
        public name : string; 
        protected _balance : number; /// if it is private then _balance : write  

        constructor(id: number , name: string, balance: number){
            this.id = id; 
            this.name = name;
            this._balance = balance; 
        }

        // public addDeposit(amount : number){
        //     this._balance = this._balance + amount; 
        // }
        //setter 
        set deposit(amount : number){
            this._balance = this._balance + amount; 
        }
        //getter 
        get balance(){
            return this._balance; 
        }
        // public getBalance(){
        //     return this._balance; 
        // }

    }
    

    class StudentAccount extends BankAccount{
        test(){
            this._balance ; 
        }
    }
    
    const goribManusherAccount = new BankAccount(11, "Mr. Gorib", 111); 
    // goribManusherAccount.addDeposit(34);
    goribManusherAccount.deposit = 34;  
    // const myBalance = goribManusherAccount.getBalance(); 
    const myBalance = goribManusherAccount.balance; /// use as a property ;;;
    console.log(myBalance); 
    //
}