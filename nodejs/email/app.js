var nodemailer = require('nodemailer');
var v = require('../variables/variable-1.js');
var e = require('../extra.js');

console.log(v);
console.log(e);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shifa.haider065',
        pass: 'hello123456'
    }
});

var mailOptions = {
    from: 'shifa.haider065@gmail.com',
    to: 'maazahmed2k16@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Hello' , error);
    }
    else {
        console.log(info);
        console.log('Email sent: ' + info.response);
    }
});