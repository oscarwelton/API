const User = require("../models/User.js");
const crypto = require("crypto");
const mailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const email = "wordweb@mail.com";
const password = "AZVmDnHaeSvh";

function sendEmail(userMail, url) {
  const verificationEmail = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional
//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>

    <style type="text/css">
      @media only screen and (min-width: 520px) {
  .u-row {
    width: 500px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 500px !important;
  }

}

@media (max-width: 520px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #169179; text-decoration: underline; } </style>



</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
    <td style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
      WordWeb - Verify your Email
    </td>
  </tr>

  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #053900;width: 500px;padding: 10px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="background-color: #053900;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 10px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">

  <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word; font-family: inherit; font-size: 22px; font-weight: 700;">WordWeb API</h1>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>


<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->

<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">

  <div style="font-size: 16px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Hey fellow programmer, </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">Thank you for supporting WordWeb API. Now for the final step, verify your email address and receive your free API key. </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">If at any point you need some assistance in setting up the API, just check over the documentation - it's all there!</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">

  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
<div align="center">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:39px; v-text-anchor:middle; width:131px;" arcsize="10.5%"  stroke="f" fillcolor="#053900"><w:anchorlock/><center style="color:#ffffff;"><![endif]-->
    <a href=${url} target="_self" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #053900; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 16px;font-weight: 700; ">
      <span style="display:block;padding:10px 20px;line-height:120%;">Verify Email</span>
    </a>
    <!--[if mso]></center></v:roundrect><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">

  <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Thank you, enjoy all </p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">WordWeb API Team</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:helvetica,sans-serif;" align="left">

  <div style="font-size: 12px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;"><em>A quick reminder, WordWeb API was created as a project for learning and is therefore not suitable for production purposes. </em></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>
    </html>`;

  const mailOptions = {
    from: email,
    to: userMail,
    subject: "WordWeb API - Verify your email address",
    html: verificationEmail,
  };

  let transporter = mailer.createTransport({
    host: "smtp.zoho.eu",
    secure: true,
    port: 465,
    auth: {
      user: email,
      pass: password,
    },
  });

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.error(err);
    }
  });
}

function generateApiKey(length = 24) {
  return "wordweb" + crypto.randomBytes(length).toString("hex");
}

function generateToken(length = 16) {
  return crypto.randomBytes(length).toString("hex");
}

class UserManager {
  static async createUser(email) {
    const newUser = new User({
      email,
      token: generateToken(),
      verified: false,
      apiKey: "",
    });

    try {
      await newUser.save();
      return newUser;
    } catch (err) {
      return null;
    }
  }

  static async getUser(email) {
    const user = await User.findOne({ email });
    return user;
  }

  static async sendVerificationEmail(email) {
    const user = await User.findOne({ email });

    if (user) {
      const userMail = user.email;
      const token = user.token;

      const url = `http://localhost:5000/verify/${userMail}/${token}`;
      sendEmail(userMail, url);
    }
  }

  static async verifyUser(email, token) {
    const user = await User.findOne({ email, token });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.verified) {
      return user;
    } else {
      user.verified = true;
      user.apiKey = generateApiKey();
      await user.save();
      return user;
    }
  }

  static async validateRequest(apiKey) {
    const user = await User.findOne({ apiKey });
    return user ? true : false;
  }

  static async getNewKey(email) {
    const filter = { email };
    const patch = { apiKey: generateApiKey() };
    await User.updateOne(filter, patch);
    return patch.apiKey;
  }
}

module.exports = UserManager;
