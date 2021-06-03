var express = require('express');
var router = express.Router();
var http = require('http');
const fetch = require('node-fetch');


const fetchData = fetch("https://jsonplaceholder.typicode.com/users")
fetchData.then((data) => {

    return data.json()

}).then((dataval) => {
    var name=dataval.map((dataval) => dataval.name)
    console.log(name,"Promise Resolved");
}).catch((err) => {
    console.log(err.name,"Promise Rejected")
})
         
            
 module.exports = fetchData;

