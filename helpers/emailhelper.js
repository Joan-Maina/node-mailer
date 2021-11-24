const ical = require('ical-generator');
const moment = require('moment')

const emailhelper = ical({
    domain: 'google.com',
    method: 'REQUEST',
    prodId: '//Google Inc//Google Calendar 70.9054//EN',
    events: [{
        start: moment(),
        status: 'CONFIRMED',
        end: moment().add(2, 'hour'),
        summary: 'Ennjoyment',
        transparency: 'OPAQUE',
        organizer: {
            name: 'Joan',
            email: 'mainawanini@gmail.com',
            mailto: 'mainawanini@gmail.com',
        },
        location: 'Nairobi',
        attendees: [
            {
              email: 'mainajoan12@gmail.com',
              name: 'Wanini',
              status: 'NEEDS-ACTION',
              rsvp: true,
              type: 'INDIVIDUAL',
              role: 'REQ-PARTICIPANT'
            },
            {
              email: 'mainawanini@gmail.com',
              name: 'Joan Maina',
              status: 'NEEDS-ACTION',
              type: 'INDIVIDUAL',
              role: 'REQ-PARTICIPANT'
            }
        ]
    }]
}).toString();
module.exports = emailhelper;