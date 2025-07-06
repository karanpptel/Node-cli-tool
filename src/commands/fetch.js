import axios from "axios";
import chalk from "chalk";

export async function fetchData(type, cityParam) {
    try {
        let url;

        switch (type) {
            case 'joke':
                url = 'https://official-joke-api.appspot.com/jokes/random'
                break;

            case 'weather':
                const city = cityParam || process.env.DEFAULT_CITY || 'london';
                const apikey = process.env.WEATHER_API_KEY;
                if (!apikey) throw new Error('Missing WEATHER_API_KEY in .env');

                url = `http://api.weatherstack.com/current?access_key=${apikey}&query=${encodeURIComponent(city)}`;

            default:
                console.error(chalk.red('✖ Unsupported fetch type. Use "joke" or "weather".'));
                return;
        }

        const response = await axios.get(url);
        if (type === 'joke') {
            console.log(chalk.green(`${response.data.setup} - ${response.data.punchline}`));

        } else if (type === 'weather') {

            if (response.data.error) {
                console.error(chalk.red('✖ Weather API error:'), response.data.error.info);
            } else {
                const location = response.data.location.name;
                const temp = response.data.current.temperature;
                const weatherDesc = response.data.current.weather_description[0];
                console.log(chalk.cyan(`🌤 Weather in ${location}: ${temp}°C, ${weatherDesc}`));

            }
        }
    } catch (error) {
        console.error(chalk.red('✖ API fetch failed:'), error.message);
    }
}