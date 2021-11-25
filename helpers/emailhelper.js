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
      end: moment().add(24, "hour"),
      summary: "Sherehe",
      transparency: "OPAQUE",
      organizer: {
        name: "Joan",
        email: `mainawanini@gmail.com`,
        mailto: `joan.wanini@thejitu.com`,
      },
      location: "Nairobi",
      attendees: [
        {
          email: "xyz@gmail.com",
          name: "John",
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
          name: "Rachael",
          status: "NEEDS-ACTION",
          type: "INDIVIDUAL",
          role: "REQ-PARTICIPANT",
        },
      ],
    },
  ],
}).toString();
module.exports = content;
