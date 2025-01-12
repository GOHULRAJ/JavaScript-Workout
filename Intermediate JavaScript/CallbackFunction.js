//callback functions

function fetchData(Callback){
    setTimeout(()=>{
        Callback("Data fetched!");
    },0);
}

// fetchData((message)=>{
//     console.log(message);
// })

fetchData();

function add(a,b,callback){
    const result=a+b;
    callback(result);
}

add(1,2,(sum)=>{
    console.log("The sum of two no is:",sum);
})

function getUserData(callback){
    setTimeout(()=>{
        const data={name:"John",age:30};
        callback(data);
    },3000);
    
}

getUserData((result)=>{
    console.log(result);
})

// call back in Array Manipulation

const number=[1,2,3,4,5];

const squereNum=number.map(num=> num*num);
console.log(squereNum)

// call back with Error Handling

function fetchDataFromAPI(url,callback){
    setTimeout(() => {
        const error=false;
        const data={message:"Data fetched Successfully!"};

        if(error){
            callback("Error fetching data",null);
        }
        else{
            callback(null,data);
        }
    }, 1000);
}

fetchDataFromAPI("https://example.com",(error,result)=>{
    if(error){
        console.log("Failed:",error);
    }
    else{
        console.log("Success",result);
    }
})

// Function with multiple callback()
function processData(data,successCallback,errorCallback){
    if(data&&data.length>0){
        successCallback("Data processed:"+data);
    }
    else{
        errorCallback("No data available")
    }
}

const data=["apple","banana","cherry"];

processData(data,
    (message)=>{console.log("Success",message);},
    (error)=>{console.log("Error:",error)}
)