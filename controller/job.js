const JobModel = require("../models/job");
const createJob= async (req,res)=>{
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);
    await newJob.save(); 
    console.log(req.body);
    res.json({
        success:true,
        message: "dummy job created API",
    });

};

const listJob =async (req,res)=> {
    res.json({
        success:true,
        message:"Dummy list job API",
    });
};

const editJob = async (req,res)=> {
    res.json({
        success:true,
        message: "Dummy Edit job API"
    });
};
const deleteJob = async (req ,res)=> {
    res.json({
        success:true,
        message:"Delete Job API"
    });
};

const jobController ={
    createJob,
    listJob,
    editJob,
    deleteJob,
};
module.exports = jobController