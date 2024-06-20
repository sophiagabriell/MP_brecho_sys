const {Module} =require("module");

const indexPage = (req,res) => { 
    res.render("index");
}
const portifolio1 =(req,res)=>{
    res.render("portifolio1")
}
const portifolio2 = (req,res) =>{
    res.render("portifolio2")
}
const portifoli3 = (req,res)=>{
    res.render("portifolio3")
}
const portifolio4 = (req,res) =>{
    res.render("portifolio4")
}
const portifolio5 =(req,res) =>{
    res.render("portifoli5")
}
const portifolio6 = (req,res) => {
    res.render("portifolio6")
}
const portifolio7 = (req,res) => {
    res.render("portifolio7")
}
const portifolio8 =(req,res) => {
    res.render("portifolio8")
}
const portifolio9 = (req,res) =>{
    res.render("portifolio9")
}
const portifolio10 = (req,res) => {
    res.render("portifolio10")
}

module.exports={indexPage}
