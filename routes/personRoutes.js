const express = require('express');
const {addPerson} = require('../controllers/personController');

const router = express.Router();

router.post('/person', addPerson);
// router.get('/persons', getAllPersons);

module.exports = {
    routes: router
}