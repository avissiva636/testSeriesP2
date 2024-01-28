const { constants } = require("../constants");
const { logEvents } = require("./logevents");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            logEvents(`Validation Failed|||${err.message}`);
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            logEvents(`Not Found|||${err.message}`);
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message, stackTrace: err.stack });
            logEvents(`Unauthorized|||${err.message}`);
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            logEvents(`Forbidden|||${err.message}`);
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
            logEvents(`Server Error|||${err.message}`);
            break;
        default:
            if (err) {
                console.log("Uncaught Error", err.message);
                logEvents(`Uncaught Error|||${err.message}`);
            }
            console.log("No Error, All good !");
            break;
    }
};

module.exports = errorHandler;