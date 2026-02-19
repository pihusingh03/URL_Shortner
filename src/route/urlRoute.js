const express=require('express')
const router=express.Router()
const UrlController=require('../controller/urlController')

// test api
router.get("/test",function(req,res){
    res.send("My first api for checking the terminal")
})

router.post('/url/shorten',UrlController.createShortUrl)
router.get('/:urlCode',UrlController.redirectLongUrl)

router.all('/*path', (req, res)=>res.status(404).send({status:false,message:"Path not found"}));


module.exports=router;