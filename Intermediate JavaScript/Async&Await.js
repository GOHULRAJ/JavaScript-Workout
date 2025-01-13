function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        },2000);
    });
}

async function getData(){
    console.log("start");
    try{
        let result=await fetchData();
        console.log(result);
    }
    catch(error){
        console.error("Error:",error);
    }
    console.log("End");
}

getData();