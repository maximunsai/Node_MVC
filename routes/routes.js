const express = require('express');
const router = express.Router();

const {userTableController, createUserController, getUsers} = require('../controllers/controller');



router.get('/createTable', userTableController);
router.post('/insert', createUserController);
router.get('/get', getUsers);

module.exports = router;