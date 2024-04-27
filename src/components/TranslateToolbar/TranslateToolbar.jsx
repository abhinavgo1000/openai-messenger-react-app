import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import './TranslateToolbar.css';

export default function TranslateToolbar() {
    const [alignment, setAlignment] = React.useState('en');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Language"
        >
            <ToggleButton value="en">English</ToggleButton>
            <ToggleButton value="es">Español</ToggleButton>
        </ToggleButtonGroup>
    );
}
