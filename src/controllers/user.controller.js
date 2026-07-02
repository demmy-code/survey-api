import User from '../models/User.js';

export const getUserByName = async (req, res) => {
    try {
        console.log(req.params)
        const { name } = req.params;
        const findUser = await User.findOne({ name });
        //  const findUser = await User.find({});

        console.log(typeof findUser)

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
}