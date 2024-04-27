import * as React from 'react';
import Typography from '@mui/material/Typography';

import './HomePage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';

export default function HomePage() {

    return (
        <React.Fragment>
            <div className="toolbar-align">
                <TranslateToolbar />
            </div>
            <Typography
                variant="h3"
                gutterBottom
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >      
                Welcome to the Chatbox Application
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >      
                Type away in the messages page to connect with your loved ones.
            </Typography>
        </React.Fragment>
    );
}
