const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/email", (req, res)=>{
    if(req.body){
        console.log(req.body);
        res.redirect('/')
        // var transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         type: 'OAuth2',
        //         user: process.env.GMAIL_USER,
        //         pass: process.env.GAMIL_PASS,
        //         clientId: process.env.CLIENT_ID,
        //         clientSecret: process.env.CLIENT_SECRET,
        //         refreshToken: '1/en-GL3PTL4rxUZTXWGFb7gGFDWyJkimGiwgUDvBRzaOEzIigUXjCqqIKYae6BBxD',
        //         accessToken: 'ya29.Glv0BUih66I-zXu0d0RaFQM0LB9t5nAwovasV09etBeTTluNHnZAKrFfcIwD_BAmZV5bSvoTOy7nuZ_UFy58OOglF8EKOjwwuuATPB58A7ZXGNNDqgGrg7ZZ-FP-',
        //         accessUrl: 'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https://developers.google.com/oauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https://mail.google.com/&access_type=offline'

        //     }
        // });
        // transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
        //     let accessToken = userTokens[user];
        //     if(!accessToken){
        //         return callback(new Error('Unknown user'));
        //     }else{
        //         return callback(null, accessToken);
        //     }
        // });
        // var mialOptions = {
        //     from: req.body.email,
        //     to: process.env.GMAIL_USER,
        //     name: req.body.name,
        //     subject: "portfolio message",
        //     text: req.body.message
        // };

        // transporter.sendMail(mialOptions, (err, info) => {
        //     if(err){
        //         console.log(err);
        //         res.redirect("/")
        //     } else {
        //         res.redirect("/");
        //     };
        // });
    };
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
