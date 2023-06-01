import { Box } from '@mui/material';
import { useState } from 'react';
import Select from 'react-select';
import cities from "../../ir.json"
import styles from "./WeatherPage.module.css"

const options = cities.map((city) => {
    return { value: { lat: city.lat, lng: city.lng }, label: city.city }
});

const WeatherPage = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
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
            }}
        >
            <Select
                placeholder="Enter City"
                className={styles.citySelecter}
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </Box>
    );
}

export default WeatherPage;