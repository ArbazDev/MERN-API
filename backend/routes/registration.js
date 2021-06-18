const express = require("express")
const { Mongoose } = require("mongoose")
const router = express.Router();
const loginfo = require('../models/login')

//getting all
router.get('/', async(req,res)=>{
    try{
        const login = await loginfo.find()
        res.json(login)
    } catch(err){
        res.status(500).json({message:err.message})
    }
});
// getting one
router.get('/:id',getlogin, (req,res)=>{
    res.json(res.login)
})
// posting one
router.post('/', async(req,res)=>{
    
    const login = new loginfo({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emails: req.body.emails,
        password: req.body.password
    })
    
    try{
        const newlogin = await login.save()
        res.status(201).json(newlogin)
    console.log(newlogin)
    } catch(err){
        res.status(400).json({message:err.message})
    }
});
// updating one
router.patch('/:id',getlogin, async(req,res)=>{
    if(req.body.firstName != null){
        res.login.firstName= req.body.firstName
    }
    if(req.body.lastName != null){
        res.login.lastName= req.body.lastName
    }
    if(req.body.emails != null){
        res.login.emails= req.body.emails
    }
    if(req.body.password != null){
        res.login.password= req.body.password
    }
    try{
        const updatedlogin = await res.login.save()
        res.json(updatedlogin)
    }catch(err){
        res.status(400).json({message:err.message})
    }
});
// deleting one
router.delete('/:id',getlogin, async(req,res)=>{
    try{
        await res.login.remove()
        res.json({message:'Deleted User'})
    }catch(err){
        res.status(404).json({message:err.message})
    }
})
// middleware

async function getlogin(req,res,next){
    let login
    try{
        login = await loginfo.findById(req.params.id)
        if (login == null){
            return res.status(404).json({message: 'cannot find login'})
        }
    } catch(err){
        return res.status(500).json({message:err.message})
    }
    res.login = login
    next()
}



module.exports = router