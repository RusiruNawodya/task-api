require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require('./Routes/TaskRoutes');
const { globalErrorHandler } = require('./Middleware/errorHandler');

const app = express();

app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Error handler
app.use(globalErrorHandler);

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