const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

app.use(express.static(path.join(__dirname, "/public/")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.post("/", (req,res) => {
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port : 465,
    auth: {
      user: "free3test@gmail.com",
      pass: "****"
    }
  });
  transporter.sendMail({
       from: "free3test@gmail.com",
       to: "free3test@gmail.com",
       subject: req.body.subject,
       text: `from: ${req.body.email}
       name: ${req.body.name}
       Message: ${req.body.text}`
    }, (error)=> {
      if(error){
        res.status(404).send();
      }
    });
    res.end()
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
     console.log(`server is listening on ${port}`)
});
