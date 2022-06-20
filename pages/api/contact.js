export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.office365.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL,
    to: "info@tu.biz",
    subject: `Message From ${req.body.firstName}`,
    text:
      req.body.company +
      " | Sent from: " +
      req.body.email +
      req.body.country +
      req.body.notes,
    html: `<div>${req.body.company}</div><div>Sent from: ${req.body.email}</div><div> ${req.body.country}</div> <div> ${req.body.notes}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
