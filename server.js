require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => 
    console.log("Connected To MongoDB")
)

.then(() => {
    app.listen(process.env.PORT || 5000,() =>
    console.log(`server running on port ${process.env.PORT || 5000}`))
})

.catch((err) =>
    console.log(err)
)