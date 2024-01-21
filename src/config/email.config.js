const nodemailer = require("nodemailer");

const { GMAIL, GMAIL_PASS } = require("../config").ServerConfig;

const mailSender = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
    },
});

module.exports = mailSender;
