var http = require('http');
const fetch = require('node-fetch');

const fetchingData = ("") 

async function userData() {
    
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if(response.status===400)
        {
            console.log("bad request");
        }
        else{
           const data = await response.json();
           console.log(data);
        }
        
    }
    catch(error){
        console.log(error);
    }
    
}
userData();

module.export = fetchingData;