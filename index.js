const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(middleware);
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let courses = [
    {id:1 , name: "java"},
    {id:2 , name:"javascript"},
    {id:3 , name:"python"}
]

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/course', (req, res) => {
    res.json(courses);
  })
  
app.post('/course',(req,res)=>{
    console.log(req.body);
    let singCor = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(singCor);
    res.send("updated");
})

app.put('/course',(req,res)=>{
    const c = {
        id : req.body.id,
        name : req.body.name
    }
    courses[req.body.id-1] = c;
    res.send("done !");
})

app.delete('/course',(req,res)=>{
    courses.splice(req.body.id-1,1);
    res.send("deleted");
})

function middleware(req,res,next){
    console.log("called");
    next();
}

function logger(req,res,next){
    const method = req.method;
    const ip = req.ip;
    const date = new Date().toISOString();
    const hostname = req.hostname;

    console.log(`${date}: ${method} ${req.originalUrl} from ${ip} (${hostname})`);

    next();
}