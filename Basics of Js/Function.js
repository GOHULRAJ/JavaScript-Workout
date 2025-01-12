    
    //Function declaration
    function add(a,b){
        return a+b;
    }
    
    //Function Expression 
    // Hoisting: Function expressions are not hoisted. You cannot call the function before it is defined.
    
    console.log("The sum of 'A' and 'B' is: ",add(15,14));
    const add =function(a,b){
        return a+b;
    }

    const add =(a,b)=>{
        return a+b;
    }
     console.log("The sum of 'A' and 'B' is: ",add(15,15));