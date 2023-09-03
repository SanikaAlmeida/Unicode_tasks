const express=require('express')
const router=express.Router()
const Pair=require('../model/pair')  //import pair model

router.get('/', async(req,res)=>{    //display all the pairs present in the database
    try{
    const pairs=await Pair.find()
    res.json(pairs) }                //displays in json format
    catch(error){
        console.log("Error while fetching")
    }
})

router.post('/',async(req,res)=>{    //request to add new pairs to database
    const pair=new Pair({            //creates a Pair instance based on data entered in the request body
        word: req.body.word ,
        meaning: req.body.meaning ,
        synonym: req.body.synonym ,
        antonym: req.body.antonym
    })
    try{
    const p1=await pair.save()      //saves the instance to the database
    res.json(p1) }
    catch(error){
        res.send("Error while posting")
    }
})

router.delete('/:id', async(req,res)=>{     //request to delete pairs based on the id
    try{
    const pair=await Pair.findById(req.params.id)  //find the pair based om its id and store it in an instance
    const p1= await pair.deleteOne()          //delete pair from the database
    res.send("Deleted sucessfully") }
    catch(error){
        console.log("error while deleting")
    }
})

router.patch('/:id', async(req,res)=>{    //update meaning based on the id
    try{   
    const pair=await Pair.findById(req.params.id)  //find the pair based on its id
    pair.meaning=req.body.meaning        //update the meaning from the request body
    const p2=await pair.save()       //save the updated pair to the database
    res.json(p2) }
    catch(error){
        console.log("Error while updating")
    }
})

//bonus task

router.get('/:query', async(req,res)=>{    //to display pairs based on the word entered
    const query=req.params.query;
    try{
        const p= await Pair.find({word:{$regex: "^"+query, $options: "i"}}) //find pairs which match the query and are case-insensitive
        if (p.length==0){                 
            res.send("No words found")
        }
        else{
            res.json(p)
        }
    }
    catch(error){
        console.log("Unable to fetch the words")
    }

})

router.get('/search/:query', async(req,res)=>{   //to display pairs with same meaning,synoym or antonym
    const query =req.params.query;
    try{
        const p=await Pair.find({
            $or:[                     //or operation checks if either meaning,synonym or antonym matches
                { meaning:query},
                {synonym:query},
                {antonym:query}   
            ]
        })
        if (p.length==0){
            res.send("Synonyms or antonyms do not exist")
        }
        else{
            res.json(p)
        }
    }
    catch(error){
        console.log("Unable to fetch the words")
    }

})

module.exports= router   //export the router