const express = require("express");
const router = express.Router();

const Donation = require("../models/Donation");
const Campaign = require("../models/Campaign");


router.post("/", async (req, res) => {

    const donation = new Donation(req.body);
    await donation.save();

 
    const campaign = await Campaign.findById(req.body.campaignId);
    campaign.raisedAmount += req.body.amount;
    await campaign.save();

    res.json({ message: "Donation successful" });

});


router.get("/:campaignId", async (req, res) => {

    const donations = await Donation.find({
        campaignId: req.params.campaignId
    });

    res.json(donations);
});

module.exports = router;