const mailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

console.log(email, password);

let transporter = mailer.createTransport({
  host: "smtp.zoho.eu",
  secure: true,
  port: 465,
  auth: {
    user: email,
    pass: password,
  },
});

const mailOptions = {
  from: email,
  to: "oscarwelton@gmail.com",
  subject: "Sending Email using Node.js",
  html: '<p>test</p>',
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
