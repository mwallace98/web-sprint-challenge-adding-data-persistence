// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()
const Project = require('./model')

router.use(express.json())

router.post('/',(req,res,next) => {
    res.json('post new task')
})


router.get('/',(req,res,next) => {
    res.json('get all tasks')
})

module.exports = router
