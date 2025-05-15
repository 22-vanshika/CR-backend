const express = require('express');
const aiController = require("../controllers/ai.controller")
const router = express.Router();
// const aiService = require("../services/ai.service")

router.post("/get-review", aiController.getReview)

// router.get("/get-response" ,async (req,res) =>{
//     const prompt=req.query.prompt;
//     if(!prompt){
//         return res.status(400).send("Prompt required");
//     }
//     const response= await aiService(prompt);
//     res.send(response);
// })

module.exports = router;  