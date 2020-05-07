export const twilio = (message) => {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = process.env.REACT_APP_ACCOUNT_SID;
    const authToken = process.env.REACT_APP_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    client.messages
        .create({
            body: message,
            from: "+12034086029",
            to: "+19143125729",
        })
        .then((message) => console.log(message.sid, "Twililo Message Sid"));

    // console.log(message, "twilio message");
};
