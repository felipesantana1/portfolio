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
        
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                pass: process.env.GAMIL_PASS,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                accessToken: 'ya29.GlvzBUNHDuGspNG4gYrdU2TkB8l4R0MceOa0W2D6YAxAej8cqfmQxTnkElQb_jXEIbZCysXWYLvbE4pl-J0Ejh29_uqnC9uo54Q303O_K1pmz3N66MtU9ylFCGvf',
                refreshToken: '1/PcvMrQFfsO9b2ETQVs174bNKW8BnbqLvIbcYhoX10lM'
            }
        });
        transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
            let accessToken = userTokens[user];
            if(!accessToken){
                return callback(new Error('Unknown user'));
            }else{
                return callback(null, accessToken);
            }
        });
        var mialOptions = {
            from: req.body.email,
            to: process.env.GMAIL_USER,
            name: req.body.name,
            subject: "portfolio message",
            text: req.body.message
        };

        transporter.sendMail(mialOptions, (err, info) => {
            if(err){
                console.log(err);
                res.redirect("/")
            } else {
                res.redirect("/");
            };
        });
    };
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
