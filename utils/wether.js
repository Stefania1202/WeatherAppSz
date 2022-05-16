const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const windToKMPerHour = (metersPerSeconds) => {
    return (metersPerSeconds * 3600) / 1000;
};