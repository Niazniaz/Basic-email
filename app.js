var bodyParser = require("body-parser"),
 express = require("express"),
 app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


console.log("This better work");


app.get('/', function (req, res) {
  res.render("index");
})

app.post('/result',function(req,res){
  var msgtxt=(req.body.msg);
  console.log(msgtxt);
  if(msgtxt){
    const msg = {
      to: 'receipent@gmail.com',
      from: 'sender@hotmail.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: msgtxt,
      html: `<strong>${msgtxt}</strong>`,
  };
  sgMail.send(msg);
  }
  else{
    const msg = {
      to: 'reciepent@gmail.com',
      from: 'sender@hotmail.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'default text',
      html: '<strong>default text</strong>',
  };
  sgMail.send(msg);
  }

  
  res.render("result");
})
app.listen("3000",()=> console.log("Server started"));
