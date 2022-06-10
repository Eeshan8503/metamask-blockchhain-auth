const express = require('express');
const cors=require('cors');
const developerRouter=require("./API/routes/developerRoutes");
const userRouter=require("./API/routes/userRoutes")
const app=express();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
  };
  
app.use(cors(corsOptions))
app.use(express.json({ limit: '500kb' }));


app.use('/api/v1/dev', developerRouter);
app.use('/api/v1/user',userRouter)
module.exports=app;
