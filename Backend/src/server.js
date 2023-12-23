const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./util/middleware/errorHandler");
const { connectDb } = require("./database");
const path = require("path");
const ejs = require('ejs');
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');

const initializeServer = async () => {
    const app = express();

    port = process.env.PORT || 5000;

    await connectDb();
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../public/views"));

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../public')));


    app.use("/", require("./routes/adminRoutes"));
    app.use("/course", require("./routes/courseRoutes"));
    app.use("/product", require("./routes/productRoutes"));
    app.use("/gallary", require("./routes/gallaryRoutes"));
    app.use("/testimonial", require("./routes/testimonialRoutes"));
    app.use("/notification", require("./routes/notificationRoutes"));

    app.use("/api/home", require("./routes/contactRoutes"));
    app.use("/api/users", require("./routes/userRoutes"));
    app.use(errorHandler);

    app.listen(port, () => {
        console.log(`Server runnig on port ${port}`)
    });
};

initializeServer();