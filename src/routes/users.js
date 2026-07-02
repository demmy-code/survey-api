const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getUserByName } = require('../controllers/user.controller');

router.get('/welcome/:name', getUserByName);

module.exports = router;
