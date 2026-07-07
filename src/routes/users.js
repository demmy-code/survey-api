const express = require('express');
const router = express.Router();
const User = require('../models/User.models');
const { getUserById, createRatings } = require('../controllers/user.controller');

router.get('/welcome/:id', getUserById);
router.post('/:id/ratings', createRatings);

module.exports = router;
