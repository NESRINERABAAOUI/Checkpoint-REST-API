const express=require('express')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db=require('./config/db')
require('dotenv').config();
const PORT=process.env.PORT
const User=require('./models/User')

app.get("/users",async (req,res)=>{
    try{
        const users= await User.find();
        console.log(users)
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({ message: 'Error fetching users', error });

    }
})
app.post( "/users", async (req, res)=>{

    try{
        const user = new User (req.body)
        await user.save();
        res.status(201).json(user)
    }
    catch(err) {
        res.status(500).json({ message: 'Error creating user', err });

} })
app.get("/users/:id", async (req,res)=>{
    try{
        const id =req.params.id
        const user = await User.find({'_id':id});
        res.status(200).json(user)
    
    }
    catch(err) {
        res.status(500).json({ message: 'Error creating user', err });

}})

app.put ("/users/:id", async (req,res)=>{
    try{
        const id =req.params.id
        const user = await User.findByIdAndUpdate(id,req.body);
        res.status(200).json(user)
    
    }
    catch(err) {
        res.status(500).json({ message: 'Error creating user', err });

}})
app.delete ("/users/:id", async (req,res)=>{
    try{
        const id =req.params.id
        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user)
    
    }
    catch(err) {
        res.status(500).json({ message: 'Error creating user', err });

}})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`) ;
     });