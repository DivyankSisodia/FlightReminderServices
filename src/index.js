const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const sendBasicMail = require('./service/email-service')

const cron = require('node-cron');

const setupAndStart = () => {
    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);

        // sendBasicMail(
        //     'hyderabadfinancedaily@gmail.com',
        //     'dhruvsisodia13@gmail.com',
        //     'This is a testing email',
        //     'Hey, How are you! This is a test email from Flight Reminder Service.',
        // )

        // cron.schedule('*/1 * * * *', () => {
        //     console.log('Running a task every one minutes');
        // })
    });
}

setupAndStart();
