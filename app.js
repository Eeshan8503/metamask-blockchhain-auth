const express = require('express');
const cors=require('cors');
const developerRouter=require("./API/routes/developerRoutes");

const app=express();
const corsOptions = {
    origin: true,
    credentials: true, 
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '500kb' }));


app.use('/api/v1/dev', developerRouter);
// app.use('/api/v1/user')
module.exports=app;
