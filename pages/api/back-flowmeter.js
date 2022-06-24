export default async function BackFlowmeter(req, res) {
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
    subject: "Flowmeter Form",
    text:
      req.body.company +
      " | Sent from: " +
      req.body.firstName +
      req.body.lastName +
      req.body.email +
      req.body.notes +
      req.body.gpm +
      req.body.pressure +
      req.body.fluid +
      req.body.flowDirection +
      req.body.readingDirection,

    html: `<div>${req.body.company}</div>
        <div> Name: ${req.body.firstName}</div>
        <div> Last name: ${req.body.lastName}</div> 
        <div> Email: ${req.body.email}</div>
        <div> Notes: ${req.body.notes}</div>
        <div> GPM: ${req.body.gpm}</div>
        <div> Pressure: ${req.body.pressure}</div>
        <div> Fluid: ${req.body.fluid}</div>
        <div> Flow Direction: ${req.body.flowDirection}</div>
        <div> Reading Direction: ${req.body.readingDirection}</div>`,
  };

  await new Promise((req, res) => {
    transporter.sendMail(mailData, function (err, info) {
      // if (err) console.log(err);
      // // else console.log(info);
    });
  });
}
