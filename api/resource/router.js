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

router.get('/',async (req,res,next) => {
    try { 
        const resources = await Router.getAll()
        res.json(resources)
    } catch (err){
        next(err)
    }
})



module.exports = router


