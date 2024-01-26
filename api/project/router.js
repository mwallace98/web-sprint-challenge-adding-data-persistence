// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Project = require('./model')

router.use(express.json())


router.post('/',async (req,res,next) => {
    res.json('posting new car')
})

router.get('/', async (req,res,next) => {
  try{
    const projects = await Project.getAll()
    res.json(projects)
  }catch(err){
    next(err)
  }
})




module.exports = router