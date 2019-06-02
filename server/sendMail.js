const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

export function handler(event, context, callback){
  /*
Setup transport
*/
  var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.password
    }
  };

  var transporter = nodemailer.createTransport(transport)

  /*
  Send the email here
  */
  const parsedBody = JSON.parse(event.body);
  var body = parsedBody.name + '(' + parsedBody.email  + ') ' + 'from ' + parsedBody.organization + ' would like to request access. \n' + parsedBody.content
  var mailOptions = {
    from: 'intheclearapp@gmail.com',
    to: 'intheclearapp@gmail.com',
    cc: 'joshsauder@gmail.com',
    subject: parsedBody.type,
    text: body,
  }
  transporter.sendMail(mailOptions, function(error, response){
    if(error){
       callback.end("error");
       callback.status = "400"
    }else{
       callback.end("Message Sent");
       callback.status = "200"
    }
  });
}



