const sender = require('../config/email-config');

const sendBasicMail = async (mailFrom, mailTo, mailSubject, mailTExt) => {
    try {
        const response = await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailTExt
    });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = sendBasicMail;