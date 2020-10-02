const sgMail = require('@sendgrid/mail')
const { response } = require('express')
// const apiKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to : email,
    from : "andreidamian0612@gmail.com",
    subject: 'Welcome to taskapp',
    text: `Thanks for joining ${name}`
  })
}


const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to : email,
    from : "andreidamian0612@gmail.com",
    subject: 'Sorry to see you go',
    text: `We are sorry to see that you are leaving us, ${name}.`
  })
}

module.exports = {
  sendWelcomeEmail : sendWelcomeEmail,
  sendGoodByeEmail: sendGoodByeEmail
}