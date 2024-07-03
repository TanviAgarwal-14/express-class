const express= require('express');
const app= express();

let courses= [
    {id: 1, name: "java"},
    {id: 2, name: "javascript"},
    {id: 3, name: "python"}
];

app.get('/courses', (req, res) =>{
    res.json(courses);
})

app.listen('3000', () => {
    console.log("server started")
})