const express=require("express")
const router= express.Router()

const{portifolio1,portifolio2,portifolio3,portifolio4, portifolio5,portifolio6,portifolio7,portifolio8,portifolio9,portifolio10} = require("../controllers/indexcontroller")

router.get("/1",(req,res) => {
    portifolio1(req,res);
})

router.get("/2",(req,res) => {
    portifolio2(req,res);
})

router.get("/3",(req,res) => {
    portifolio3(req,res)
})

router.get("/4",(req,res) => {
    portifolio4(req,res)
})

router.get("/5",(req,res) => {
    portifolio5(req,res)
})

router.get("/6",(req,res) => {
    portifolio6(req,res)
})

router.get("/7",(req,res) => {
    portifolio7(req,res)
})

router.get("/8",(req,res) => {
    portifolio8(req,res)
})

router.get("/9",(req,res) => {
    portifolio9(req,res)
})

router.get("/10",(req,res) => {
    portifolio10(req,res)
})

module.exports=router


