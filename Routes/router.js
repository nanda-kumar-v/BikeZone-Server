const express = require('express')

const driverController = require('../Controllers/driverController')
const router = new express.Router()


router.post('/register-driver',driverController.register)

router.get('/get-drivers',driverController.getData)

router.delete('/delete-driver/:id',driverController.deleteDriver)

module.exports = router