const messager = require('../helpers/messagehelper')
const sending = require('../config')
console.log('sending')
// const emailSender = async (req, res) => {
// // console.log('jo')

    // try{
    //     await sending(messager)
    //     return res.send('Successfully sent')
    // }
    // catch(error){
    //     return res.send('Not sent' +error.message)
    // }
// }
const Sender = async (req,res) => {
    try{
            await sending(messager)
            return res.send('Successfully sent')
        }
        catch(error){
            return res.send('Not sent' +error.message)
        }
}

module.exports = {Sender};