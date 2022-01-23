const express = require('express')
const Controller = require('../controllers/class.controller')
const jwtServices = require("../services/jwt.services")
const router = express.Router()

router.delete('/deleteClass/:id', Controller.deleteClass)
router.put('/updateClass/:id', Controller.updateClass)
router.put('/updateClassDetail/:id', Controller.updateClassDetail)
router.put('/enrollClass/:id', Controller.enrollClass)
router.post('/createClass', Controller.createClass)
router.get('/getClassByAuthor/:FK_Author', Controller.getClassByAuthor)
router.get('/getClass/:id', Controller.getClass)
router.get('/getAllClass', Controller.getAllClass)



module.exports = router