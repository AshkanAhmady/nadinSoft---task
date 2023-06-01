import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Select from 'react-select';
import Typography from '@mui/material/Typography';
import cities from "../../ir.json"
import http from '../../services/httpService';
import { citySelectType } from '../../types';
import styles from "./WeatherPage.module.css"
import Loading from '../../components/loading/Loading';

const options = cities.map((city) => {
    return { value: { lat: city.lat, lng: city.lng }, label: city.city }
});

const WeatherPage = () => {
    const [selectedOption, setSelectedOption] = useState<citySelectType | null>(null)
    const [loading, setLoading] = useState(false)
    const [weather, setWeather] = useState<any>({
        city: null,
        temperature: null,
        isDay: null,
        windspeed: null
    })

    const handleChange = (selectedOption: citySelectType | null) => {
        setSelectedOption(selectedOption)
        setLoading(true)
        http.get(`?latitude=${selectedOption?.value.lat}&longitude=${selectedOption?.value.lng}&current_weather=true`).then(({ data }) => {
            setWeather({
                city: selectedOption?.label,
                temperature: data.current_weather.temperature,
                isDay: data.current_weather.is_day,
                windspeed: data.current_weather.windspeed
            })
            setLoading(false)
        })
    };

    return (
        <Box
            sx={{
                display: 'flex',
                padding: "2rem",
                alignItems: 'center',
                gap: "1rem",
                flexDirection: 'column',
                minHeight: '100%',
                position: "relative"
            }}
        >
            <Select
                placeholder="Enter City"
                className={styles.citySelecter}
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
            {loading ? <Loading /> : !loading && weather.city ? < Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        {weather?.city} ({weather?.isDay ? "Day" : "Night"})
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        temperature: {weather?.temperature} °C
                    </Typography>
                    <Typography variant="body2">
                        windspeed: {weather?.windspeed}
                    </Typography>
                </CardContent>
            </Card> : null}

        </Box >
    );
}

export default WeatherPage;