const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../../config/index");

const validateToken = asyncHandler(async (req, res, next) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        res.status(401);
        throw new Error("User UnAuthorized");
    }
    let token = cookies.jwt;

    jwt.verify(token, APP_SECRET, (err, decoded) => {
        if (err) {
            res.status(401);            
            throw new Error("User is not authorized");
        } else {
            req.user = decoded.user;
            next();
        }
    });


});

module.exports = validateToken;