const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config({quiet: true});

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users');

app.use(userRoutes);

app.get('/', (req ,res) => {
    res.send('API is ready');
});

const PORT = process.env.PORT || "5000";
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
