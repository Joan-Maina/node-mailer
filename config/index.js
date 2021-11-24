
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
//   function verifyFunction(){
// transporter.verify(function(error, success){
//   if(error){
//     console.log('error at verify' +error)
//   }
//   else{
//     console.log('server ready')
//   }
//   return true;
// });
// }
// verifyFunction();
const sending = async (mailOptions) => {
  return new Promise ((resolve, reject) => {
    transporter.sendMail(mailOptions,(error, info) => {
      if(error){
        return reject(error);
      }
      console.log(info.response)
      resolve(info.response)
  })
})
}
module.exports = sending