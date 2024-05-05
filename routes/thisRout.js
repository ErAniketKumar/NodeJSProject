const express = require('express')
const router=express.Router();
const path=require('path');
const fs=require('fs');
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'gmail', // use 'gmail' as the service
  auth: {
    user: 'aniketshraff@gmail.com', 
    pass: 'gzljymayxvrfdbim' 
  }
});

router.get('/',(req, res)=>{
    res.render('home');
})

router.get('/signup',(req, res)=>{
    res.render('signup');
})

router.get('/login',(req, res)=>{
    res.render('login');
})

router.get('/sendemail',(req, res)=>{
    res.render('sendemail');
})


router.post('/sendemail', (req, res) => {
    const { semail, remail, subject, message } = req.body;
    // console.log(req.body);
    const mailOptions = {
        from:semail,
        to:remail,
        subject:subject,
        text:message,
    };

    transport.sendMail(mailOptions,(err,info)=>{

        if(err) {
            console.log(err);
            res.status(500).send('error sending mail');
        } else {
            console.log(`Sent Email: ${info.response}`);
            res.status(200).send('email sent successfully');
        }
    });
})

module.exports=router;
