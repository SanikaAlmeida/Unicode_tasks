const mongoose=require('mongoose')
//create a mongoose Schema
const Schema=mongoose.Schema     

const pairSchema=new Schema({   
    word: {  
        type:String , 
        unique:true ,    //adds unique words to the database
        minlength: 2,
        maxlength: 15,
        } ,
    meaning:{ 
        type:String 
    },
    synonym:{ type:String} ,
    antonym: { type:String }
})

//exports Pair model from the Schema
module.exports=mongoose.model('Pair', pairSchema)
