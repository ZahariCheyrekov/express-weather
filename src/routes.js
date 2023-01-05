const router = require('express').Router();

const weatherController = require('./controllers/weather-controller');

router.use('/weather', weatherController);

module.exports = router;