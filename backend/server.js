const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

const bcrypt = require('bcrypt');

require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: String, required: true },
  });
  
  userSchema.pre('save', async function(next) {
    if (this.isModified('firstName')) {
      this.firstName = await bcrypt.hash(this.firstName, 10);
    }
    if (this.isModified('lastName')) {
        this.lastName = await bcrypt.hash(this.lastName, 10);
      }
    if (this.isModified('email')) {
      this.email = await bcrypt.hash(this.email, 10);
    }
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    if (this.isModified('dob')) {
        this.dob = await bcrypt.hash(this.dob, 10);
      }
    next();
  });
  
  const User = mongoose.model('User', userSchema);
  
  app.use(express.json());
  
  app.post('/signup', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user && await bcrypt.compare(req.body.password, user.password)) {
        res.json({ message: 'User logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });