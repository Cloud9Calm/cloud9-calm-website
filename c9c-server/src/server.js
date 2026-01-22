const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, '../../c9c-client', 'build')));
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, website, inquiry } = req.body;

    // Basic validation
    if (!name || !email || !inquiry) {
      return res.status(400).send('Missing required fields');
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS in server .env');
      return res.status(500).send('Email service not configured');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Cloud9 Calm Co" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'erin@cloud9calm.com',
      subject: 'Inquiry from cloud9calm.com',
      text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nInquiry: ${inquiry}`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).send('Message received');
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send('Error sending email');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../c9c-client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});