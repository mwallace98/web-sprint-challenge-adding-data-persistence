// build your `/api/projects` router here
const express = require('express')
const router = express.Router()


router.use(express.json())


router.post('/',async (req,res,next) => {
    res.json('posting new project')
})

router.get('/', async (req,res,next) => {
  res.json('getting all cars')
})




module.exports = router