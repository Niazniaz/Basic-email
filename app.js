var bodyParser = require("body-parser"),
 express = require("express"),
 app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
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
      to: 'zaintheking2000@gmail.com',
      from: 'sanaa-zain@hotmail.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: msgtxt,
      html: `<strong>${msgtxt}</strong>`,
  };
  sgMail.send(msg);
  }
  else{
    const msg = {
      to: 'zaintheking2000@gmail.com',
      from: 'sanaa-zain@hotmail.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'default text',
      html: '<strong>default text</strong>',
  };
  sgMail.send(msg);
  }

  
  res.render("result");
})
app.listen("3000",()=> console.log("Server started"));