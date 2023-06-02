import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import Select from 'react-select';
import Typography from '@mui/material/Typography';
import cities from "../../ir.json"
import http from '../../services/httpService';
import { citySelectType } from '../../types';
import Loading from '../../components/loading/Loading';
import { useTranslation } from 'react-i18next';

const options = cities.map((city) => {
    return { value: { lat: city.lat, lng: city.lng }, label: city.city }
});

const WeatherPage = () => {
    const { t } = useTranslation()
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
                placeholder={`${t("EnterCity")}`}
                className="selector"
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
            {loading ? <Loading /> : !loading && weather.city ? < Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        {weather?.city} ({weather?.isDay ? t("Day") : t("Night")})
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {t("Temperature")}: {weather?.temperature} °C
                    </Typography>
                    <Typography variant="body2">
                        {t("Windspeed")}: {weather?.windspeed}
                    </Typography>
                </CardContent>
            </Card> : null}

        </Box >
    );
}

export default WeatherPage;