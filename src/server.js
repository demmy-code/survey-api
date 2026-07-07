require('dotenv').config({ path: '../.env', quiet: true });
const mongoose = require('mongoose');
const app = require('./app');

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, { bufferCommands: false })
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.error('❌ Connection Error:', err));