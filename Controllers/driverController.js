const mongoose = require('mongoose')
const drivers = require('../Models/driverSchema')

exports.register = async (req, res) => {
    const { id, fName, lName, address, email, age, mobile, qualification, exp } = req.body

    try {
        const newDriver = new drivers({
            id, fName, lName, address, email, age, mobile, qualification, exp
        })
        console.log(newDriver);
        await newDriver.save();
        console.log('inside register');
        res.status(200).json("New driver registered");
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.getData = async (req, res) => {
    try {
        const driversData = await drivers.find()
        res.status(200).json(driversData)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.deleteDriver = async (req, res) => {
    const { id } = req.params;
    try {
        console.log("Inside delete function");
        await drivers.deleteOne({ id })
        res.status(200).json("Driver deleted successfully")
    }
    catch (err) {
        res.status(401).json(err)
    }
}