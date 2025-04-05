const exp=require('express');
const EventApp=exp.Router();
const expressAsyncHandler=require('express-async-handler');
const EventSchema=require('../schemas/event');
const EventDetails=require('../schemas/eventdetails');

EventApp.post('/register',expressAsyncHandler(async(req,res)=>{
    try{
        const credDetails=req.body;
        const doc=new EventSchema(credDetails);
        const dbresult=await doc.save();
        res.send({message:'event successfully registered',payLoad:dbresult});
    }catch(err){
        res.send({message:'error occurred',payLoad:err.message});
    }
}))

EventApp.post('/events', expressAsyncHandler(async (req, res) => {
    try {
        const currentDate = new Date();
        const dbRes = await EventSchema.find({date_time: { $gte: currentDate }}).sort({ date_time: 1 });
        res.send({ message: 'Upcoming events fetched', payLoad: dbRes });
    } catch (err) {
        res.send({ message: 'Error occurred', payLoad: err.message });
    }
}));

EventApp.post('/event',expressAsyncHandler(async(req,res)=>{
    try{
        const eventDetails=req.body;
        const dbRes=EventSchema.findOne(eventDetails._id);
        res.send({message:'event found',payLoad:dbRes});
    }catch(err){
        res.send({message:'error occurred',payLoad:err.message});
    }
}))

EventApp.post('/participants',expressAsyncHandler(async(req,res)=>{
    try{
        const details = req.body;
        const dbRes=await EventDetails.findOne(details._id);
        res.send({message:'participants found',payLoad:dbRes});
    }catch(err){
        res.send({message:'error occurred',payLoad:err.message});
    }
}))

module.exports=EventApp;