

const express=require("express");

const router=express.Router();

const Flat=require("../model/flat.model");

router.get("/",async(req,res)=>{
    try {
        
        const flats=await Flat.find().lean().exec();

        res.send(flats);
    } catch (error) {
       res.send(error.message) 
    }
})


router.post("/",async(req,res)=>{
    try {
        
     const flat=await Flat.create(req.body);

        res.send(flat);

    } catch (error) {
        res.send(error.message)
    }
})


module.exports=router;