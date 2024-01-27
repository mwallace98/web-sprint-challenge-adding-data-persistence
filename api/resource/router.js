// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Router = require('./model')

router.use(express.json())


router.post('/', async (req,res,next) => {
    try { 
        res.json('post new resource')
    } catch (err){
        next(err)
    }
})

router.get('/',(req,res,next) => {
    try { 
        res.json('get new resources')
    } catch (err){
        next(err)
    }
})



module.exports = router


