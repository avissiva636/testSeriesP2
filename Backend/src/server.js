const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./util/middleware/errorHandler");
const {connectDb} = require("./database");
const app = express();

port = process.env.PORT || 5000;

// connectDb();

app.use(express.json());
app.use("/api/home",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server runnig on port ${port}`)
});