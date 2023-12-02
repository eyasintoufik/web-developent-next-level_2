{
//spread operator : 

const bros1 : string[] = ['eyasin', 'mumi', 'sourav']; 
const bros2 : string[] = ['muhit', 'zaber', 'munia']; 

//bros1.push(bros2); // it will giver an error : output will be :['eyasin', 'mumi', 'sourav', ['muhit', 'zaber', 'munia']]; 
bros1.push(...bros2); //['eyasin', 'mumi', 'sourav', 'muhit', 'zaber', 'munia'];

/// This is how we can add 2 array's element using spread operator , also we marge objects like :

const mentors1 ={
    typescript: 'Mezba', 
    redux : 'Mir', 
    dbms : 'Mizan'
}
const mentors2 = {
    prisma : 'Firoz',
    next: 'Tanmoy',
    cloud:'Nahid',
}

const mentorsList = {
    ...mentors1,
    ...mentors2
}

//This is how spread operator works !



// REST operator :

/*
const greetFriends = (friens1 : string, friends2 : string, friends3 : string ){
    console.log(`hi ${friends1} ${friends2} ${friends3}`);
}
greetFriends('abul', 'kabul', 'bubul', 'ubul')

*/
// problem is happened that, new friend we cannot add in this functions for that we can use rest operator; 


const greetFriends = (...friends : string[]) => {
    friends.forEach((friend : string) => console.log(`hi ${friend}`)); 
}

greetFriends('abul', 'kabul', 'bubul', 'ubul')


}