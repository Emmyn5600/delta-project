const express = require("express")
const axios  = require("axios")
const Cheerio = require("cheerio")

const app = express() 

 const port = 8080

 let data=[]

 const url = "https://en.wikipedia.org/wiki/Silicon_Valley"

 const getData = async ()=>{
  try {
    
    let res = await axios.get(url)
    let $ = await Cheerio.load(res.data)
    $("#mw-content-text > div.mw-parser-output > div:nth-child(92) > ul >li >a"
    ).each((i,e)=>{
      data.push($(e).text().trim())
    })
  } catch (error) {
    console.log(error)
  }
 }

 getData()

 app.get("/data",(req,res)=>{
  
  res.status(200).send({type:"Notable companies in Silicon Valley.",data})
 })


 app.listen(port,()=>console.log("server is running ")) 


 module.exports = app