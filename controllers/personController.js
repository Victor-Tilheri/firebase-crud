'use strict';

const firebase = require('../db');
const firestore = firebase.firestore(); 
const Person = require('../models/person');

const addPerson = async (req, res, next) => {
    try {
        const data = req.body;
        const person = await firestore.collection('persons').doc().set(data);
        res.send('Record saved successfuly');
        res.status(200).send("Successful");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addPerson
}