const exp=require('express')
const userApp=exp.Router()
const UserModel=require('../schemas/user')
const UserDetailsModel=require('../schemas/userdetail')
const EventModel=require('../schemas/event')
const expressAsyncHandler=require('express-async-handler')

require('dotenv').config()
userApp.use(exp.json())

//login
userApp.post('/user',expressAsyncHandler(async (req,res)=>{
    const newUSer=req.body;
    const datainDb=await UserModel.findOne({email:newUSer.email})
    if(datainDb===null)
    {
        let newDoc=new UserModel(newUSer)
        let savedDoc=await newDoc.save()
        res.status(201).send({message:"new user",payload:savedDoc})
    }
    else
    {
        res.status(200).send({message:"user exists",payload:datainDb})
    }
}))

//userdetails
userApp.post('/userdetails',expressAsyncHandler(async (req,res)=>{
    
}))

//usereventdetails
userApp.get('/userdetails/:_id', expressAsyncHandler(async (req, res) => {
        try {
            const userId = req.params._id;
            // Step 1: Find the user's registered event IDs
            const userEventData = await UserDetailsModel.findOne({ user_id: userId });
            if (!userEventData || userEventData.event_id.length === 0) {
                return res.status(404).json({ message: 'No registered events found for this user.' });
            }
            // Step 2: Use event IDs to fetch full event details
            const eventDetails = await EventModel.find({
                _id: { $in: userEventData.event_id }
            });
            res.status(200).json({
                user_id: userId,
                registeredEvents: eventDetails
            });
        } catch (err) {
            console.error('Error fetching user events:', err);
            res.status(500).json({ message: 'Server error' });
        }
}))




module.exports=userApp