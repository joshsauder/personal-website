const sgMail = require('@sendgrid/mail')
const dotenv = require('dotenv');
dotenv.config();

export function handler(event, context, callback){

  /*
  set API Key
  */
  sgMail.setApiKey(process.env.API_KEY);

  /*
  Create email body
  */
  const parsedBody = JSON.parse(event.body);
  var github = parsedBody.github ? parsedBody.github : "";
  var body = `Name: ${parsedBody.name} \n Email: ${parsedBody.email} \n Github: ${github} \n Organization: ${parsedBody.organization} \n\n ${parsedBody.content}`
  var mailOptions = {
    from: 'joshsauder@gmail.com',
    to: 'intheclearapp@gmail.com',
    cc: 'joshsauder@gmail.com',
    subject: parsedBody.type,
    text: body,
  }

  /*
  Send the email here
  */
  sgMail.send(mailOptions)
  .then(() => {
    callback(null, {
      statusCode: 200,
      body: "Message Sent!"
    });
  })
  //catch if message not sent
  .catch(error => callback(error));
}



