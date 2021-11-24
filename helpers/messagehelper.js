require('dotenv').config();
const content = require("./emailhelper");
const messagehelper = {
    from: {
        name: 'Joan',
        address: 'mainawanini@gmail.com'
    },
    to: process.env.GMAIL_USER,
    subject: "calendar invite",
     html: `<div>
                <h4 style="text-align: center">Friends and colleagues get together</h4>
                <p style="text-align: center; color: grey">Come lets have fun</p>
                <p style="text-align: center; color:grey;">Bring along your friends</p>
                <p style="text-align: center;color:grey">Meet new people and make new friends</p>
                
       </div>`,
     icalEvent: {
        content: content
      },
}

module.exports = messagehelper