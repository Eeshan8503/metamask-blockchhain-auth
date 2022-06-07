const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./API/routes/developerRoutes");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connection success")).catch((err) => console.log(err));

app.use(express.json());

app.use("/api/developerRoutes", userRoute);


app.listen(8800, () => {
    console.log("Server is running on port 8800");
})