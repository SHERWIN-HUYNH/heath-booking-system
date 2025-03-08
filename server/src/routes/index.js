const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
router.get('/test', userController.createUser);

module.exports = router; 
