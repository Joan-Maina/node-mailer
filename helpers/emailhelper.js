const ical = require("ical-generator");
const moment = require("moment");

const content = ical({
  domain: "google.com",
  method: "REQUEST",
  prodId: "//Google Inc//Google Calendar 70.9054//EN",
  events: [
    {
      start: moment(),
      status: "CONFIRMED",
      end: moment().add(12, "hour"),
      summary: "Ennjoyment",
      transparency: "OPAQUE",
      organizer: {
        name: "Joan",
        email: `mainawanini@gmail.com`,
        mailto: `caleb.baraka@thejitu.com`,
      },
      location: "Nairobi",
      attendees: [
        {
          email: "mainajoan12@gmail.com",
          name: "Wanini",
          status: "NEEDS-ACTION",
          rsvp: true,
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
        {
          email: "abc@gmail.com",
          name: "Joy",
          status: "NEEDS-ACTION",
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
        {
          email: "xyz@gmail.com",
          name: "Sarah",
          status: "NEEDS-ACTION",
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
      ],
    },
  ],
}).toString();
let cal = ical();
cal.method("REQUEST");
// cal.domain(url).name("My ical invite");
module.exports = content;
