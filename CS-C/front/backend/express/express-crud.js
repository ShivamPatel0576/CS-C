import express from 'express';
const app =express();
const  users =[{
    id:1,
    name: 'abhishek',
    age: 30
}]
const port=3000;
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello cs c");
});

app.get('/users/:id', (req,res)=>{
   const {id} = req.params;
   const user = users.find(user => user.id == id);
   res.send(user);
});

app.patch('/users/:id', (req,res)=>{
    const {id} = req.params;
    const { name } = req.body;
    const index= users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send(users);
 });

 app.delete('/users/:id', (req,res)=>{
    const {id} = req.params;
    const index= users.findIndex(user => user.id == id);
    users.splice(index, 1)
    res.send("user is deleted Successfully");
 });


app.post('/users', (req,res)=>{
    const {name,age} = req.body;
    const newID = users.length>0 ? users[users.length-1].id+1:1;

    users.push({id: newID,name,age});
    res.send("new user is created successfully");
});

app.get('/users', (req,res)=>{
    res.send(users)
})
//middle ware express.text()
//method app.use

app.post('/', (req,res)=>{
    const data = req.body;
    console.log(data);
    res.send("data added successfully");
});
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

});