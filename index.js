const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const developerRoute = require("./API/routes/developerRoutes");
const userRoute = require("./API/routes/userRoutes");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connection success")).catch((err) => console.log(err));

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
  };
  
app.use(cors(corsOptions))
app.use("/api/developerRoutes", developerRoute);
app.use("/api/userRoutes", userRoute);


app.listen(8800, () => {
    console.log("Server is running on port 8800");
})