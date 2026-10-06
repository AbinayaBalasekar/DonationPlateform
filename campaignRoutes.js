const express=require("express");
const router=express.Router();
const Campaign=require("../models/Campaign");
router.post("/",async (req,res)=>{
  const campaign=new Campaign(req.body);
  const saved=await campaign.save();
  res.json(saved);
});

router.get("/",async(req,res)=>{
  const campaigns=await Campaign.find().lean();
  res.json(campaigns);
});
router.get("/:id",async(req,res)=>{
  const campaign=await Campaign.findById(req.params.id);
  res.json(campaign);
});
module.exports=router;