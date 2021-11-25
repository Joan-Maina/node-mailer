const messager = require("../helpers/messagehelper");
const sending = require("../config");
console.log("sending");

const Sender = async (req, res) => {
  try {
    await sending(messager);
    return res.send("Successfully sent");
  } catch (error) {
    return res.send("Not sent" + error.message);
  }
};

module.exports = { Sender };
