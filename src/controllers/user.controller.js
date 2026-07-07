// import User from '../models/User.models.js';
import {User ,Ratings} from '../models/User.models.js';

export const getUserById = async (req, res) => {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    console.log(process.env.MONGO_URI);
    console.log('Request Params:', req.params);

    try {
        const { id } = req.params;
        const findUser = await User.findById(id);


        if (!findUser) {
            return res.status(404).json({
                code: 404,
                message: 'User not found',
            });
        }

      

        res.status(200).json({
            code: 200,
            message: `Welcome ${findUser.name}!`,
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

export const createRatings = async (req, res) => {
    try {
        const { id } = req.params;
        const { SignupRating, LoanRating, RepaymentRating, SupportRating, RecommendationRating, ImprovementRating } = req.body;
        const findUser = await User.findById(id);

        
        if (!findUser) {
            return reis.status(404).json({
                code: 404,
                message: 'User not found',
            });
        }

        const existingRatings = await Ratings.findOne({ userId: id });
        if (existingRatings) {
            return res.status(400).json({
                code: 400,
                message: 'Ratings for this user already exist',
            });
        }

        const newRatings = new Ratings({
            userId: id,
            SignupRating,
            LoanRating,
            RepaymentRating,
            SupportRating,
            RecommendationRating,
            ImprovementRating: Array.isArray(ImprovementRating) ? ImprovementRating : [],
        });

        await newRatings.save();

        res.status(201).json({
            code: 201,
            message: 'Response Submitted Successfully',
            data: newRatings,
        });

    } catch (err) {
            console.log(err);
            res.status(500).json({
                code: 500,
                message: 'Server Error',
                error: err.message,
            });
        }
}





        