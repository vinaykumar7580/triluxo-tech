
const express=require("express")
const cors=require("cors")
const { connection } = require("./database")
const { bookRouter } = require("./Routes/book.routes")

const app=express()
app.use(express.json())
app.use(cors())

//handle routes of books library
app.use("/books", bookRouter)

app.listen(5500, async()=>{
    try{
        await connection
        console.log("MongoDB database connected")

    }catch(err){
        console.log(err)
        console.log("MongoDB database not connected")
    }
})

