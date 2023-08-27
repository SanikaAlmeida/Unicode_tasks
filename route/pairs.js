const express=require('express')
const router=express.Router()
const Pair=require('../model/pair')

router.get('/', async(req,res)=>{
    try{
    const pairs=await Pair.find()
    res.json(pairs) }
    catch(error){
        console.log("Error while fetching")
    }
})

router.post('/',async(req,res)=>{
    const pair=new Pair({
        word: req.body.word ,
        meaning: req.body.meaning ,
        synonym: req.body.synonym ,
        antonym: req.body.antonym
    })
    try{
    const p1=await pair.save()
    res.json(p1) }
    catch(error){
        res.send("Error while posting")
    }
})

router.delete('/:id', async(req,res)=>{
    try{
    const pair=await Pair.findById(req.params.id)
    const p1= await pair.deleteOne()
    res.send("Deleted sucessfully") }
    catch(error){
        console.log("error while deleting")
    }
})

router.patch('/:id', async(req,res)=>{
    try{   
    const pair=await Pair.findById(req.params.id)
    pair.meaning=req.body.meaning
    const p2=await pair.save()
    res.json(p2) }
    catch(error){
        console.log("Error while updating")
    }
})

module.exports= router