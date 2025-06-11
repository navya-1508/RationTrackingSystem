const express = require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const cors=require('cors');
const app = express();
app.use(cors());
const PORT = 3000;
app.use(express.json());
require('dotenv').config();

const User = require('./models/User');

const uri = process.env.MONGO_URI;
mongoose.connect(uri)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.post('/login', async (req, res) => {
  console.log('Request body:', req.body);
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send('Username and password required');
    }
     const existingUser = await User.findOne({ username });
    if (!existingUser) {
      console.log("User not found!!")
      return res.status(409).send('Username not found!!');
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
if (!isMatch) {
  return res.status(401).send('Invalid credentials');
}
    res.status(201).send('✅ Login sucessfully');
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Error while logging user');
  }
});

app.post('/signup',async(req,res)=>{
  console.log(req.body);
  const {username,password,confirmpassword}=req.body;
  if (!username || !password||!confirmpassword) {
      return res.status(400).send('All fields are required');
    }
    if(password!=confirmpassword){
      return res.status(400).send('Password doesnt match')
    }
    try{
    const existingUser=await User.findOne({username});
    if (existingUser) {
  console.log("User already exists");
  return res.status(409).send('User already exists');
}

     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser=new User({username,password:hashedPassword});
     await newUser.save();
    res.status(201).send('User registred sucessfully');
  }
  catch(error){
    console.error('Error saving user:', error);
    res.status(500).send('User failed to save');
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
