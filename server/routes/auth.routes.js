const Router = require("express");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("config");
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
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({name, email, password: hashPassword});
            await user.save();
            return res.json({message: 'User was created'})

        } catch (e) {
            console.log(e);
            res.send({message: 'Server error'});
        }
    })

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({message: "User with this email not found"});
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if(!isPassValid){
            return res.status(400).json({message: "Invalid password"});
        }
        if(user.status === 'block'){
            return res.status(400).json({message: "User blocked"});
        }
        await User.updateOne({email}, {$set: {signIn: Date.now()}});
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn:"1h"});
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                signUp: user.signUp,
                signIn: user.signIn,
                status: user.status,
            }
        })
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOne({_id});
        if(!user){
            return res.status(404).json({message: "User with this id not found"});
        }
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.delete('/users', async (req, res) => {
    try {
        await User.deleteMany({});
        return res.status(200).json({message: 'All users remove'});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOne({_id})
        if(!user){
            return res.status(404).json({message: "User with this id not found"});
        }
        await User.deleteOne({_id});
        return res.status(200).json({message: 'User with this id remove'});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.put('/users', async (req, res) => {
    try {
        const {status} = req.body;
        await User.updateMany({}, {$set: {status: status}});
        return res.status(200).json({message: `All users ${status}`});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

router.put('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const {status} = req.body;
        const user = await User.findOne({_id});
        if(!user){
            return res.status(404).json({message: "User with this id not found"});
        }
        await User.updateOne({_id}, {$set: {status: status}});
        return res.status(200).json({message: `User ${_id} ${status}`});
    } catch (e) {
        console.log(e);
        res.send({message: 'Server error'});
    }
})

module.exports = router