const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
});

const RatingsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
  SignupRating: { type: Number, min: 0, max: 10, required: true },
  LoanRating: { type: Number, min: 0, max: 10, required: true },
  RepaymentRating: { type: Number, min: 0, max: 10, required: true },
  SupportRating: { type: Number, min: 0, max: 10, required: true },
  RecommendationRating: { type: Number, min: 0, max: 10, required: true },
  ImprovementRating: {
    type: [String],
    enum: ['Onboarding', 'Loan application', 'Loan repayment', 'Support'],
    default: [],
  },

});

const User = model('Users', userSchema);
const Ratings = model('Ratings', RatingsSchema);

module.exports = { User, Ratings };