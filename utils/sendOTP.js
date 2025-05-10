const nodemailer = require('nodemailer');

const sendOTP = async (email, otp) => {
  if (!email || !otp) {
    throw new Error('Recipient email or OTP is missing');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  });
};

module.exports = sendOTP;  
