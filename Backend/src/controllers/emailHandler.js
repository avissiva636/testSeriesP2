const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { USER, APP_PASSWORD } = require("../config/index");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smpt.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: USER,
        pass: APP_PASSWORD,
    }
});


const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.log(error)
    }
}

//@desc Send Email
//@route POST /emailHandler
//access public
const emailHandler = asyncHandler(async (req, res) => {

    const { name, email, phone,
        qualification, place, message } = req.body.emailData.formData;

    const mailOptions = {
        from: {
            name: 'WEB WIZARD',
            address: USER
        },
        to: ['lingamsiva646@gmail.com'],
        cc: ['lingamsiva636@gmail.com'],
        subject: "Send email using nodemailer and gmail",
        html: `
                    <p>${message}</p>
                    <table style="border-collapse: collapse; width: 100%; margin-top: 15px;">
                        <thead style="background-color: #f2f2f2;">
                            <tr>
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Title</th>
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Name</td>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Email</td>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">${email}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Phone</td>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">${phone}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Qualification</td>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">${qualification}</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">Place</td>
                                <td style="border: 1px solid #dddddd; text-align: left; padding: 10px;">${place}</td>
                            </tr>
                        </tbody>
                    </table>
                `,
    };

    sendMail(transporter, mailOptions);

    res.status(200).json({
        message: "Email Send",
    });
});

module.exports = {
    emailHandler
}