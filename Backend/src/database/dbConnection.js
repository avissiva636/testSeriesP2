const mongoose = require("mongoose");
const {CONNECTION_STRING} = require("../config");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(CONNECTION_STRING);
        console.log("Database Connected: ",
        connect.connection.host,
        connect.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;