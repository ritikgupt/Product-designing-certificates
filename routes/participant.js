var Participant = require('../models/participant');
var express = require('express');
var router = express.Router();
const CSVToJSON = require('csvtojson');

// CSVToJSON().fromFile("./public/source.csv").then(source =>{
//     console.log(source.length)
//     for(var i=0; i<source.length;i++)
//     {
//         Participant.create({
//             email:source[i].Email,
//             name:source[i].Name
//         })
//     console.log(source[i].Email);
//     }
// })

module.exports=router