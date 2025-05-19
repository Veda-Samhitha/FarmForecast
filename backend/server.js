const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


const app = express();

const PORT = 5003;

const MONGO_URI = 'mongodb://127.0.0.1:27017/Farmer_Data';
const JWT_SECRET = 'your_jwt_secret_key_here';

// Make JWT_SECRET available globally
process.env.JWT_SECRET = JWT_SECRET;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB using hardcoded MONGO_URI
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });