import { Contact } from "../database/index.js";
import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
const { ADDRESS, KEY } = process.env;

// @desc Send mail from contact form
// @route POST /api/mailer/send;
// @access Public
const sendMail = asyncHandler(async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: ADDRESS,
      pass: KEY,
    },
  });

  const { name, email, phone, message } = req.body;
  const areaCode = phone.substring(0, 3),
    prefix = phone.substring(3, 6),
    lineNumber = phone.substring(6, 10),
    phoneNumber = `(${areaCode})${prefix}-${lineNumber}`;
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phoneNumber}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;
  // console.log(phoneNumber, +phone, phone, 'string', 666);
  Contact.create({
    name,
    email,
    phone: phoneNumber,
    // phoneUnformatted: +phone,
    message,
  })
    .then(() => {
      const data = {
        from: `"Southerns Website -- ${name}" <${ADDRESS}>`,
        to: ADDRESS,
        subject: 'Email from Contact Form -- Southerns Website',
        html: output,
      };
      transporter.sendMail(data, (err, info) => {
        if (err) {
          console.log(err);
          res.send('An Error occurred!');
        } else {
          console.log(info);
        }
      });
      res.status(201).send('Message sent!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Server Error: ' + err);
    });
});

// @desc Get all mail from contact forms
// @route GET /api/users/inbox;
// @access Private
const getAllMail = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({message: "Success!", contacts});
})

export { sendMail, getAllMail };

