var nodemailer = require("nodemailer");

var mailer = {

  transporter : undefined,

  mailOptions : {},

  setUp : function(from, to, subject, html) {

    this.transporter = nodemailer.createTransport("smtps://techblog.system%40gmail.com:Epam2016@smtp.gmail.com");
    this.mailOptions.from = from;
    this.mailOptions.to = to;
    this.mailOptions.subject = subject;
    this.mailOptions.html = html;
  },

  sendMail : function(){

    if(this.transporter == undefined){
      console.log("Mail not setup, fail to send");
    }else{
      this.transporter.sendMail(this.mailOptions, function(err, info){
        if(err) console.log(err);
        else console.log("Mail Sent Successfully");
      })
    }
  }

};

module.exports = mailer;