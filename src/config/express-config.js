const express = require('express');
const path = require('path');

const { DEFAULT_PORT } = require('../constants/express-constants');

exports.expressConfig = (app) => {
    app.use('/static', express.static(path.resolve(__dirname, '../public')));
    app.get('/', (req, res) => {
        res.send('Application is running correctly');
    });
    app.listen(DEFAULT_PORT, () => console.log(`Server is listening on: http://localhost:${DEFAULT_PORT}`));
}