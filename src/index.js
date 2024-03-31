const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

const setupAndStart = ()=>{
    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}

setupAndStart();
 