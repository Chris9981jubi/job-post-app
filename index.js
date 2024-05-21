const express= require("express");
const app =express();
const jobRoutes =require ("./routes/job");
const mongoose= require("mongoose");

app.use(express.json());
mongoose
.connect("mongodb://localhost:27017/jobapp")
.then(()=> console.log("connection with database successful"))
.catch((err)=> console.log("Error connecting with database", err));
app.use(jobRoutes);


app.listen(8080, ()=> console.log("server is up and running on port 8080"));