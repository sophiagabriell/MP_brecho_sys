const express = require("express");
const router =express.Router()
 
const {indexPage} = require("../controllers/indexControllers")


router.get("/", (req,res) =>{
    indexPage(req,res);
})

module.exports= router