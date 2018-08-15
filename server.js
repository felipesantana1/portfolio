const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
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
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
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
