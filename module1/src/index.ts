// let course = "Next level web development"; 
// console.log(course); 

//--->This course is running but why! ans: This is not typescript code! As it is js, compiler execute the code as JS. 
let course : string = "Next level web development"; 
console.log(course); 
/*
    Now It is Ts code but shown that Unexpected token. So, compiler does not understand this code cz Ts not a programming language.  we need to changed 
    it to JS. How ? 
    {
        tsc filename ----> tsc index.js
        tsc foldername/src/filename ---> tsc module1/src/index.ts
    }
    but index.ts and index.js file may provide a error cz this files not stay in same folder. so , we need to anther folder for keep JS file in that 
    folder. so, we need to configure TS files. 
    {
        tsc --init
        --> tsc will be configured. in this file, we have lookated the area of outdir-> JS files, we prefer that, JS files stay in DIST file and
        rootflie --> Ts files stay in src files. 
    }

    {
        tsc 
    }   
    for run Ts file : 
    {
        1st step : npm i -g ts-node-dev //1st time for globaly instatllation ;
        2nd step: ts-node-dev --respawn --transpile-only server.ts
            example: ts-node-dev --respawn --transpile-only ./module1/src/index.ts
    } 

*/