const express = require("express");
const app = express();
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

app.use("/api/developerRoutes", developerRoute);
app.use("/api/userRoutes", userRoute);


app.listen(8800, () => {
    console.log("Server is running on port 8800");
})