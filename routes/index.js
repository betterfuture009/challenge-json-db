const express = require('express')

const student = require('./student')

const router = express.Router()

router.get('/health', (req, res) => {
    res.send('OK')
  })

// Student api
router.use('/student', student)
module.exports = router