const {Router} = require('express')
const config = require('config')
const Report = require('../models/Report')
const auth = require('../middleware/auth.middleware')
const shortid = require('shortid')
const router = Router()



router.get('/',async (req,res)=> {
    try{
        const reports = await Report.find()
        res.json(reports)
        
    }catch (e){
        res.status(500).json({message:'Something went wrong try again'})
    }
})

module.exports = router