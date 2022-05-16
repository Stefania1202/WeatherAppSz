const apiKey = "39a6869287767e7abf62d183c6f2fcb8";

const getCurrentWeatherEndPoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForecastEndPoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};