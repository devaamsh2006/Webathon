const exp=require('express')
const userApp=exp.Router()
const UserModel=require('../schemas/user')
const UserDetailsModel=require('../schemas/userdetail')
const EventModel=require('../schemas/event')
const EventDetailsModel=require('../schemas/eventdetails');
const expressAsyncHandler=require('express-async-handler')
require('dotenv').config()
userApp.use(exp.json())
userApp.post('/login',expressAsyncHandler(async (req,res)=>{
    const newUSer=req.body;
    const datainDb=await UserModel.findOne({email:newUSer.email})
    if(datainDb!==null)
    {
        //console.log("hi")
        // let newDoc=new UserModel(newUSer);
        // let savedDoc=await newDoc.save()
        // console.log(savedDoc)
        // const user_id=savedDoc._id;
        // const newRes=await UserDetailsModel({user_id:user_id})
        // res.status(201).send({message:"new user",payload:[savedDoc,newRes]});
        res.status(200).send({message:"user exists",payload:datainDb,userType:"user"})
    }
    else
    {
        res.status(200).send({message:"user not exists",payload:datainDb})
    }
}))

userApp.post('/signup',expressAsyncHandler(async(req,res)=>{
    try{
        const newUSer=req.body;
        let newDoc=new UserModel(newUSer);
        let savedDoc=await newDoc.save()
        const user_id=savedDoc._id;
        const newRes=await UserDetailsModel({user_id:user_id})
        res.status(201).send({message:"new user",payload:[savedDoc,newRes]});
    }catch(err){
        res.send({message:"error occurred",payload:err.message});
    }
}))

userApp.put('/clubs', expressAsyncHandler(async (req, res) => {
    try {
        const { email, clubname, request } = req.body;
        const student = await StudentModel.findOne({ email });
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        const updatedRequests = student.requests.filter(club => club !== clubname);
        const updateData = {
            requests: updatedRequests
        };
        if (request === 'accept') {
            updateData.$addToSet = { clubs: clubname };
        }
        const updatedStudent = await StudentModel.findOneAndUpdate(
            { email },
            updateData,
            { new: true }
        );

        res.send({ message: `Club request ${request}ed`, payLoad: updatedStudent });

    } catch (err) {
        res.status(500).send({ message: 'Error occurred', payLoad: err.message });
    }
}));


//userdetails
userApp.post('/userdetails',expressAsyncHandler(async (req,res)=>{
    try{
        const { user_id , event_id }=req.body;
        const dbRes = await UserDetailsModel.findOneAndUpdate(
            { user_id: user_id },              
            { $push: { event_id: event_id } }, 
            { new: true, upsert: true }
        );
        const resDb=await EventDetailsModel.findOneAndUpdate(
            {event_id: event_id},
            {$push:{user_id:user_id}},
            {new:true, upsert:true}
        )
        res.send({message:'details added',payLoad:[dbRes,resDb]});
    }catch(err){
        res.send({message:'error ocurred',payLoad:err.message});
    }
}))

userApp.get('/eventdetails/:_id',expressAsyncHandler(async(req,res)=>{
    try{
        const user_id=req.params._id;
        const dbRes=await UserDetailsModel.findOne({user_id:user_id});
        const eventsList=dbRes.event_id;
        const result=await EventModel.find({_id:{$in:eventsList}});
        res.send({message:"past events",payload:result});
    }catch(err){
        res.send({message:'error occurred',payload:err.message});
    }
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