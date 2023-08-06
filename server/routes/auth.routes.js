const Router = require("express");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const router = new Router();

router.post('/registration', 
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer then 1 and shorter then 10").isLength({min:1, max:10}),
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Uncorrect request', errors})
            }

            const {name, email, password} = req.body

            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 15)
            const user = new User({name, email, password: hashPassword});
            await user.save();
            return res.json({message: 'User was created'})

        } catch (e) {
            console.log(e);
            res.send({message: 'Server error'});
        }
    })

module.exports = router