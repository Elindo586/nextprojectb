export default async function BackPump(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "info@tu.biz",
    to: "info@tu.biz",
    subject: "Pump Form",
    text:
      req.body.company +
      " | Sent from: " +
      req.body.firstName +
      req.body.lastName +
      req.body.email +
      req.body.notes +
      req.body.pumpSelect +
      req.body.gpmPump1 +
      req.body.pressure +
      req.body.rpm +
      req.body.p1type +
      req.body.gpmPump2 +
      req.body.pressure2 +
      req.body.p2type +
      req.body.gpmPump3 +
      req.body.pressure3 +
      req.body.p3type,

    html: `<div>${req.body.company}</div>
    <div> Name: ${req.body.firstName}</div>
    <div> Last name: ${req.body.lastName}</div> 
    <div> Email: ${req.body.email}</div>
    <div> Notes: ${req.body.notes}</div>
    <div> Pump type: ${req.body.pumpSelect}</div>
    <div> Pump 1 flow: ${req.body.gpmPump1}</div>
    <div> Pump 1 pressure: ${req.body.pressure}</div>
    <div> Pump 1 RPM: ${req.body.rpm}</div>
    <div> Pump 1 control:  ${req.body.p1type}</div>
    <div> Pump 2 flow: ${req.body.gpmPump2}</div>
    <div> Pump 2 pressure: ${req.body.pressure2}</div>
    <div> Pump 2 control: ${req.body.p2type}</div>
    <div> Pump 3 flow: ${req.body.gpmPump3}</div>
    <div> Pump 3 pressure: ${req.body.pressure3}</div>
    <div> Pump 3 control: ${req.body.p3type}</div>`,
  };

  await new Promise((req, res) => {
    transporter.sendMail(mailData, function (err, info) {
      // if (err) console.log(err);
      // // else console.log(info);
    });
  });
}
