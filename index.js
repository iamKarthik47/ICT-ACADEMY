//importing the express
const express = require('express')
const employeeModel=require("./model")
const cors=require('cors')

//2.initialisation
const app=new express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//3.api creation
app.get('/',(req,res)=>{
    res.send("The message from api")
})

//add
app.post('/create',async(req,res)=>{
    var result=await new employeeModel(req.body)
    result.save()
    res.send("data added")
})


//api for viewing data
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.json(data)
    console.log(data)
})
//api for delete
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})

//api for update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated!!")
})

//4.port
app.listen(3005,()=>{
    console.log("port 3005 is running")
})

//trial
app.get('/trial',(req,res)=>{
    res.send("This is a trial message")
})

//
app.post('/pos',(req,res)=>{
    res.send("This is a trial post message")
})