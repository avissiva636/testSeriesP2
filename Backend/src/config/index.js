const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const envFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: envFile });
} else {
    dotEnv.config()
}

module.exports = {
    PORT: process.env.PORT,
    CONNECTION_STRING: process.env.MONGODB_URI,
    APP_SECRET: process.env.APP_SECRET,
    USER: process.env.USER_NAME,
    APP_PASSWORD: process.env.APP_PASSWORD,
};