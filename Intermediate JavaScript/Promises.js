/* 
A Promise is a more modern approach to handle asynchronous operations. It represents a value that may not be available yet but will be resolved at some point in the future. Promises have three states:

Pending: The initial state, before the promise is resolved or rejected.
Resolved (Fulfilled): The operation completed successfully.
Rejected: The operation failed.
Promises can be used with .then(), .catch(), and .finally() methods to handle success, error, and completion.
*/

function fetchData(){
    return new Promise((resolve,reject)=>{
        const success=false;
        if(success){
            resolve("Data fetched Successfully!");
        }
        else{
            reject("No data found!");
        }
    })
}

fetchData()
    .then((message)=>{
        console.log("Success:"+message);
    })
    .catch((error)=>{
        console.log("Failed:"+error)
    })
    .finally("Operation completed!")