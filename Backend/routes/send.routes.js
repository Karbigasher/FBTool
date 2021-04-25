const {Router} = require('express')
const { model } = require('mongoose')
const router = Router()
const Report = require('../models/Report')

router.post ('/send', async (req, res) =>
{
    try {
        const {title,textmsg} = req.body
        const report = new Report({title, textmsg})

        await report.save()
        res.status(201).json({message:'Сообщение успешно отправленно'})

    } catch (e){
        res.status(500).json({message:'Something went wrong...'})
    }
})

module.exports = router