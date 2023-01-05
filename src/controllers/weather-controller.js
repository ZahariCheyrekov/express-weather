const { getCityUrl } = require('../constants/api-constants');
const { getCityData } = require('../services/city-service');

const router = require('express').Router();

router.get("/", async (req, res) => {
    const { city } = req.query;

    const cityUrl = getCityUrl(city);
    const cityData = await getCityData(cityUrl);

    res.render("weather", { cityData });
});

module.exports = router;