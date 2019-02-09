const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

/*
Start express server
*/



/*
Login here
*/
var transport = {
  host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'saudertech@gmail.com',
          pass: 'Detroit12'

  }
}

var transporter = nodemailer.createTransport(transport)

/*
Send the email here
*/

app.post('/email', function(req,res){
    var mailOptions = {
      from: 'saudertech@gmail.com',
      to: 'saudertech@gmail.com',
      subject: 'Request',
      body: req.body.content,
      name: req.body.name,
    }
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.listen(port, () => {
  console.log('Backend is up and running!');
});
// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var organization = req.body.organization
//   var content = req.body.content
//
// /*
// Set up physical email here
// */
//   var mail = {
//     from: name,
//     to: 'joshsauder@gmail.com',
//     subject: 'InTheClear Git Request',
//     text: '${name} (${email}) from ${organization} would like to request access to InTheClear \n \n ${content}'
//   }
//
// /*
// Finally, use NodeMailer to send the message
// */
//   transporter.sendMail(mail, (err, data) =>{
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   }
// )
// })
