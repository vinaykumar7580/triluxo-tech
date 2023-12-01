
const mongoose=require("mongoose")

const bookSchema = mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    bookPrice:{
        type:Number,
        required:true
    }

},{
    versionKey:false
    
})

const BookModel = mongoose.model("book-library", bookSchema)

module.exports={BookModel}