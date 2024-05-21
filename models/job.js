const mongoose = require("mongoose");

const jobSchema =   new mongoose.schema({
    title: {
        type: String,
    },
    description:{
        type:String,
    },
    company:{
        type:String,  
    },
    location:{
        type:String,
    },
    salary:{
        type:String,
    }
});
const JobModel = mongoose.model("jobs", jobSchema);
module.exports = JobModel;
