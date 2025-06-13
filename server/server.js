const express = require('express');
const mongoose=require('mongoose');
const validator=require('validator')
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
    const { username,role, password } = req.body;
    if (!username ||!role|| !password) {
      return res.status(400).send('All fields are required');
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
  const {username,role,password,confirmpassword}=req.body;
  if (!username ||!role|| !password||!confirmpassword) {
      return res.status(400).send('All fields are required');
    }
    if(!validator.isStrongPassword(password,{minLength:8,minSymbols:1,minUppercase:1,minNumbers:1})){
      return res.status(400).json({error:'Weak Password'});
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
     const newUser=new User({username,role,password:hashedPassword});
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
