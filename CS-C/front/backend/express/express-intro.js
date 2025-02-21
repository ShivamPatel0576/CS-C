//const express = require('express');
import express from 'express';
const app = express();
app.get('/', (req,res) => {
    res.send("Welcome CS-C students");
});
//http://localhost:3000/api?name=Shivam&rollno=12332
// app.get('/api', (req, res) =>{
//     const data = req.query;
//     res.send(`My name is ${data.name}  and Rollno. is ${data.rollno}`);
// });
app.get('/api', (req, res) =>{
   try {
     // const {name = "Guest" , rollno=100} = req.query;
     const {name, rollno }=req.query;
     if (!name) {
        // res.send({ status :404, message: "Name dena hai"})
        res.status(400).send("Name dena hai");
     } else {
        res.send(`My name is ${name}  and Rollno. is ${rollno}`);    
     }
     
   } catch (error) {
    console.log("Error is:" + error.message);
   }
}); 
//http://localhost:3000/api/shiv
//http://localhost:3000/api/shiv/988

app.get('/api/:name/:rollno', (req, res) => {
    const { name, rollno } = req.params;
    res.send(`My name is ${name} and my roll no. is ${rollno}`);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});