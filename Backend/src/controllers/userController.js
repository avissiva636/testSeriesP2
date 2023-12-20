const asyncHandler = require("express-async-handler");
const { userModel: User } = require("../database/index");
const { APP_SECRET } = require("../config/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register the User
//@route GET /api/users/register
//access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username && !email && !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    // res.json({ message: "Register the User" });
});

//@desc currentUser information
//@route GET /api/users/Current
//access private

const loginUser = asyncHandler(async (req, res) => {
    const { name: username, password } = req.body;

    if (!username && !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ username });
    // compare password with hashedPassword
    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                // email: user.email,
                id: user.id,
            },
        },
            APP_SECRET,
            { expiresIn: "10m" }
        );
        res.cookie('jwt', accessToken, { httpOnly: true, secure: false, sameSite: 'strict', maxAge: 1 * 10 * 60 * 1000 });
        res.status(200).json({ message: "Received token", accessToken });
        // res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

module.exports = { registerUser, loginUser };