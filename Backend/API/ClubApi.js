const express=require('express');
const clubApp=express.Router();
const clubSchema=require('../schemas/club');
const userModel=require('../schemas/user');
const expressAsyncHandler=require('express-async-handler');
clubApp.use(express.json());

clubApp.get('/volunteers/:_id',expressAsyncHandler(async(req,res)=>{
    try{
        const _id=req.params._id;
        const volunteersList=await clubSchema.findOne({_id:_id},{volunteers:1});
        res.send({message:'volunteers found',payload:volunteersList});
    }catch(err){
        res.send({message:'error occurred',payload:err.message});
    }
}))

clubApp.post('/login',expressAsyncHandler(async (req,res)=>{
    const newUSer=req.body;
    const datainDb=await clubSchema.findOne({email:newUSer.email});
    if(datainDb!==null)
        {
            res.status(200).send({message:"user exists",payload:datainDb,userType:"club"})
        }
        else
        {
            res.status(200).send({message:"user not exists",payload:datainDb})
        }
}))

clubApp.post('/signup',expressAsyncHandler(async(req,res)=>{
    try{
        let newUser=req.body;
        let newDoc=new clubSchema(newUser);
        let dbres= await newDoc.save();
        res.send({message:'user created',payload:dbres});
    }catch(err){
        res.send({message:'error occurred',payload:err.message});
    }
}))

clubApp.put('/sendrequest', expressAsyncHandler(async (req, res) => {
    try {
        const { clubname, studentEmail } = req.body;

        // Step 1: Fetch student by email
        const student = await userModel.findOne({ email: studentEmail });

        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }

        // Step 2: Check if already in club
        if (student.clubs.includes(clubname)) {
            return res.send({ message: "Student already in club" });
        }

        // Step 3: Check if request already sent
        if (student.requests.includes(clubname)) {
            return res.send({ message: "Request already sent" });
        }

        // Step 4: Send request
        const updatedStudent = await userModel.findOneAndUpdate(
            { email: studentEmail },
            { $push: { requests: clubname } },
            { new: true }
        );

        res.send({ message: "Request sent to student", payLoad: updatedStudent });
    } catch (err) {
        res.status(500).send({ message: "Error occurred", payLoad: err.message });
    }
}));

module.exports=clubApp;