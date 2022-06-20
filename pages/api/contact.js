export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASSWORD,
    },
  });

  const mailData = {
    from: "info@tu.biz",
    to: "info@tu.biz",
    subject: "contact form",
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
