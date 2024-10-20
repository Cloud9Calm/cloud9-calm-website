const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '../../c9c-client', 'build')));
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, website, inquiry } = req.body;

  // creates a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS  
    }
  });

  // sets up email data
  const mailOptions = {
    from: email,
    to: 'erin@cloud9calm.com',
    subject: 'Inquiry from cloud9calm.com',
    text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nInquiry: ${inquiry}`
  };

  // sends email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Message received');
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../c9c-client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});