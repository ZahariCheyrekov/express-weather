exports.getCityUrl = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.KEY}`;