const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/welcome/:name', async (req, res) => {
    try {
const { name } = req.params;
      const findUser = await User.findOne({ name });

      console.log(findUser)

        if (!findUser) {
            return res.status(404).json({
                code: 404,
                message: 'User not found',
            });
        }

       

        res.status(200).json({
            code: 200,
            message: `Welcome ${name}!`,
            data: {
                name: findUser.name
            }
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            code: 500,
            message: 'Server Error',
            error: err.message
        });
    }
});

module.exports = router;
