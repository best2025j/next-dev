const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const connectDatabase = require('./config/db');
const userRoute = require('./routes/userRoute');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to Database
connectDatabase();

// Routes
app.use('/api/users/', userRoute);

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
