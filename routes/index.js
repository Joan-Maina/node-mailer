const express = require('express')
const router = express.Router();
const {Sender}  = require('../controllers/index');
console.log('EmailSender')

router.get('/', Sender)
// console.log('wanini')
module.exports = router;