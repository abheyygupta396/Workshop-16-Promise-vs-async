var express = require('express');
var router = express.Router();
var http = require('http');
const axios = require('axios');

let promise = new Promise(async function (resolve, reject) {

    await axios.get("http://fakeapi.jsonparseronline.com/users")
        .then((response) => {
            resolve('Resolve');
            console.log(response,'Promise Resolved')
        }).catch((err) => {
            reject('Reject');
            console.log(err.name, "Promise Rejected")
        })

    return promise;
})


