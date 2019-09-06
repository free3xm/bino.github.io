const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.post("/", (req,res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 466,
    auth: {
      user: "free3test@gmail.com",
      pass: "****""
    }
  });
  transporter.sendMail({
    to:"free3test@gmail.com",
    subject: req.body.subject,
    text: `Email: ${req.body.email}
    from: ${req.body.name}
    message: ${req.body.text}`
  }, (error) => {
    if(error){
      return console.log(error,1);
    }
  });
  res.end(res)
});
app.listen(port, (err) => {
  if(err){
    return console.log("error", err);
  }
  console.log(`server is listening on ${port}`);
})
