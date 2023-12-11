const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./util/middleware/errorHandler");
const {connectDb} = require("./database");
const path = require("path");
const ejs = require('ejs');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const app = express();

port = process.env.PORT || 5000;

connectDb();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const publicPath = path.join(__dirname, '..', 'public/js');
console.log(publicPath)
// app.use("public",express.static( publicPath));
// app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '../public')));


app.use("/",require("./routes/adminRoutes"));
app.use("/",require("./routes/courseRoutes"));
app.use("/",require("./routes/productRoutes"));
app.use("/",require("./routes/gallaryRoutes"));
app.use("/",require("./routes/testimonialRoutes"));
app.use("/",require("./routes/notificationRoutes"));

app.use("/api/home",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server runnig on port ${port}`)
});