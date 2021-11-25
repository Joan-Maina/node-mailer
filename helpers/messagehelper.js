require("dotenv").config();
const content = require("./emailhelper");
const messagehelper = {
  from: "mainawanini@gmail.com",
  to: ["joan.wanini@thejitu.com"],
  subject: "calendar invite",
  html: `<div>
               <h1>Invite to you:</h1>
               <p>welcome to an awesome meet-up</p>
               <p>Tell a friend to tell a friend</p>
               <button style="background-color:pink">Confirm attendance</button>
        </div>  `,
  icalEvent: {
    content: content,
  },
};

module.exports = messagehelper;
