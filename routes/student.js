const express = require('express')

const StudentCtrl = require('../controllers/student')
const { catchError } = require('../controllers/error')

const router = express.Router()

// Retrieves property name by student id
router.get('/:id', StudentCtrl.queryFilter, catchError(StudentCtrl.getFile))

// Put or Create property name by student id
router.put('/:id/courses/calculus/quizzes/:scoreId', StudentCtrl.queryFilter, catchError(StudentCtrl.update))

// Delete property name by student id
router.delete('/:id', StudentCtrl.queryFilter, catchError(StudentCtrl.remove))

module.exports = router
