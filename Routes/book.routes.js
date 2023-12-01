const express=require("express")
const { BookModel } = require("../Model/book.model")
const bookRouter=express.Router()

//get all books from database
bookRouter.get("/get-all", async(req,res)=>{
    try{
        let book= await BookModel.find()
        res.status(200).send(book)

    }catch(err){
        res.status(500).send({Error: err})

    }
})

//get single book from database
bookRouter.get("/get-single/:id", async(req,res)=>{
    const {id}=req.params;

    try{
        let book= await BookModel.find({_id:id})
        res.status(200).send(book)
    }catch(err){
        res.status(500).send({Error: err})
    }
})

// add new book in the database
bookRouter.post("/add", async(req,res)=>{
    let payload = req.body;
    try{
        let book = new BookModel(payload)
        await book.save()
        res.status(200).send("Book Added successfully")
        

    }catch(err){
        res.status(500).send({Error: err})

    }
})

//update the book in the database
bookRouter.put("/update/:id", async(req,res)=>{
    let {id}=req.params;
    let payload=req.body;

    try{
        let book= await BookModel.findByIdAndUpdate({_id:id}, payload)
        res.status(200).send("Books update successfully")

    }catch(err){
        res.status(500).send({Error: err})

    }
})

//delete the book in the database
bookRouter.delete("/delete/:id", async(req,res)=>{
    let {id}=req.params;
    try{
        let book= await BookModel.findByIdAndDelete({_id:id})
        res.status(200).send("Books deleted successfully")

    }catch(err){
        res.status(500).send({Error: err})

    }
})

module.exports={bookRouter}