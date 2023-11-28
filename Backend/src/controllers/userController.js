const asyncHandler = require("express-async-handler");
const { userModel: User } = require("../database/index");

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

    console.log(email);
    const userAvailable = await User.findOne({ email });
    console.log("user available", userAvailable);

    if (userAvailable) {
        console.log("Setting response");
        res.status(400);
        throw new Error("User Already Exists");
    }
    console.log("lets");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });
    console.log(`created user ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    // res.json({ message: "Register the User" });
});

//@desc Login user
//@route GET /api/users/login
//access public
// const loginUser = asyncHandler(async (req, res) => {  
//     const { email, password } = req.body;
//     if (!email && !password) {
//         res.status(400);
//         throw new Error("All fields are mandatory");
//     }

//     const user = await User.findOne({ email });
//     // compare password with hashedPassword
//     if (user && await bcrypt.compare(password, user.password)) {
//         const accessToken = jwt.sign({
//             user: {
//                 username: user.username,
//                 email: user.email,
//                 id: user.id,
//             },
//         },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: "15m" }
//         );
//         res.status(200).json({ accessToken });
//     } else {
//         res.status(401);
//         throw new Error("email or password is not valid");
//     }
// });

//@desc currentUser information
//@route GET /api/users/Current
//access private

const loginUser = asyncHandler(async (req, res) => {  
    const { name:username, password } = req.body;
    if (!username && !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ username });
    // compare password with hashedPassword
    console.log("hello")
    // console.log(bcrypt.getRounds(10))
    if (user && await bcrypt.compare(password, user.password)) {
        console.log("hai")
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                // email: user.email,
                id: user.id,
            },
        },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };