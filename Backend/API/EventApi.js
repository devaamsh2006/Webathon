const exp=require('express');
const EventApp=exp.Router();
const expressAsyncHandler=require('express-async-handler');
const EventSchema=require('../schemas/event');
const userApp=require('../schemas/user');
const EventDetails=require('../schemas/eventdetails');
EventApp.use(exp.json())
EventApp.post('/register',expressAsyncHandler(async(req,res)=>{
    try{
        const credDetails=req.body;
        const doc=new EventSchema(credDetails);
        const dbresult=await doc.save();
        const event_id=dbresult._id;
        const documen=new EventDetails({event_id:event_id});
        const result=await documen.save();
        res.send({message:'event successfully registered',payLoad:[dbresult,result]});
    }catch(err){
        res.send({message:'error occurred',payLoad:err.message});
    }
}))

EventApp.get('/events', expressAsyncHandler(async (req, res) => {
    try {
        const currentDate = new Date();
        const dbRes = await EventSchema.find({date_time: { $gte: currentDate }}).sort({ date_time: 1 });
        res.send({ message: 'Upcoming events fetched', payLoad: dbRes });
    } catch (err) {
        res.send({ message: 'Error occurred', payLoad: err.message });
    }
}));

// 

EventApp.get('/event/:_id', expressAsyncHandler(async (req, res) => {
    try {
      const eventId = req.params._id;
      const dbRes = await EventSchema.findOne({ _id: eventId }).lean();
  
      if (!dbRes) {
        return res.status(404).send({ message: 'Event not found' });
      }
  
      res.send({ message: 'Event found', payLoad: dbRes });
    } catch (err) {
      res.status(500).send({ message: 'error occurred', payLoad: err.message });
    }
  }));
  

EventApp.get('/participants/:_id',expressAsyncHandler(async(req,res)=>{
    try{
        const details = req.params._id;
        const dbRes=await EventDetails.find({event_id:details});
        const participantsId=dbRes[0].user_id;
        const resDb=await userApp.find({_id:{$in:participantsId}});
        res.send({message:'participants found',payLoad:resDb});
    }catch(err){
        res.send({message:'error occurred',payLoad:err.message});
    }
}))

module.exports=EventApp;