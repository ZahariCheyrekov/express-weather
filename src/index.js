const express = require('express');
const dotenv = require('dotenv');

const { expressConfig } = require('./config/hbs-config');
const routes = require('./routes');

const app = express();

const PORT = 5000;

dotenv.config();
expressConfig(app);

app.get('/', (req, res) => {
    res.send('Application is running correctly');
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on: http://localhost:${PORT}`));

