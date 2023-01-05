const express = require('express');
const dotenv = require('dotenv');

const routes = require('./routes');
const { hbsConfig } = require('./config/hbs-config');
const { expressConfig } = require('./config/express-config');

const app = express();

dotenv.config();
hbsConfig(app);
expressConfig(app);

app.use(routes);