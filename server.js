const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get('/', async (req, res) => {
  res.send("Sercer is Running");
});

app.post('/send-email', async (req, res) => {
  try {
    const { from, to, content, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'markgami07310@gmail.com',
        pass: 'okih rqzv fdha ymha',
      },
    });

    let mailDetails = {
      to: `Mark gami ${to}`,
      html: content,
      subject:subject
    };


    transporter.sendMail(mailDetails, function (err, data) {
      if (data) {
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      } else {
        res.status(200).json({ success: false, message: 'Email sent Unsuccessfully' });
      }
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
