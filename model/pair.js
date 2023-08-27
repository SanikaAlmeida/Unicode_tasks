const mongoose=require('mongoose')
const Schema=mongoose.Schema

const pairSchema=new Schema({
    word: {  
        type:String , 
        unique:true
        } ,
    meaning:{ 
        type:String 
    },
    synonym:{ type:String} ,
    antonym: { type:String }
})

module.exports=mongoose.model('Pair', pairSchema)
