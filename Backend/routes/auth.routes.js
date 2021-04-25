const {Router} = require('express')
const bcrypt = require('bcryptjs')
const {check, validationResult, body} = require('express-validator')
const User = require('../models/user')
const { JsonWebTokenError } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = Router()

router.post(
    '/register',
    [
        check('email','Unexpected email').isEmail(), // '' posmotret documentaciu express-validator
        check('password','Minimal length is 6 chars')
        .isLength({min:6})
    ], 
    async (req, res) => {
    try{
        console.log(req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data register'
            })
        }
        const {email,password} = req.body
        const candidate = await User.findOne({email})
        if (candidate)
        {
            return res.status(400).json({message:'User already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save()
        res.status(201).json({message:'User created'})
    }catch (e){
        res.status(500).json({message:'Something went wrong try again'})
    }
})
router.post('/login', [
    check('email', 'Enter email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
], async (req, res) => {
    try{
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data enter'
            })
        }
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json ({message:' User not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({message:'Invalid password try again'})
        }
        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn:'1h'}
        )
        res.json({token, userId: user.id})
    }catch (e){
        res.status(500).json({message:'Something went wrong try again'})
    }
})


module.exports = router