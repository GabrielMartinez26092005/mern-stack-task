const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.get('/', async (req, res) =>{
    const task  = await Task.find()
    res.json(task)
})

module.exports = router