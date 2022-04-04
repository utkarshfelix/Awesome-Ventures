const nodemailer = require("nodemailer");
const { google } = require("googleapis");


const GOOGLE_CLIENT_ID =
  "774423112187-un7dvcu40f9d68jppe5r2g0ispckf3m3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const GOOGLE_REFRESH_TOKEN =
  "1//04XdKYp-v6CeJCgYIARAAGAQSNwF-L9IrTiYjo4Oc6uZf-yMcXyUMzxiA8d96CJRqnrUWUuOx6bc-gE-S7j4O9MYXXkkpGN97zOc";

const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "utkarshfelix@gmail.com",
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "Utkarsh 👍 <utkarahfelix@gmail.com>",
      to: "mishrautkarshs57@gmail.com",
      subject: "Trying GOOGLE API",
      text: "Hello I hope u receive this mail",
      html: "<h1>Hello I hope u receive this mail</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email is sent", result))
  .catch((error) => console.log(error.message));
