{
    // type guard 
    //typeof ---> type guard

    type Alphaneumaric = string | number; 
    const add = (value1: Alphaneumaric , value2: Alphaneumaric )  : Alphaneumaric => {
        if( typeof value1  === 'number' &&  typeof  value2 === 'number'){
            return value1 + value2; 
        }
        else{
            return value1.toString() + value2.toString(); 
        }
    }
    const result1 = add( "5","4"); 
    console.log(result1); 
    
    
    /// in guard 

    type NormalUser = {
        name: string; 
    }
    type AdminUser = {
        name :string; 
        role : "Admin"; 
    }
    
    const getUser = (user: NormalUser | AdminUser )  => {
        if('role' in user){
            console.log(`${user.name} is a ${user.role}`);
        }
        else{
            console.log(`${user.name}`); 
        }
    }
    
    const normalUser : NormalUser = {
        name : 'eyasin ', 
    }
    
    const adminUser : AdminUser ={
        name: 'Mr Eyasin  ', 
        role : "Admin", 
    }; 
    getUser(adminUser); 
    
    //
}