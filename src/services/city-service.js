exports.getCityData = async (cityUrl) => {
    try {
        const response = await fetch(cityUrl);
        const cityData = await response.json();

        return cityData;

    } catch (err) {
        console.log(err)
    }
}