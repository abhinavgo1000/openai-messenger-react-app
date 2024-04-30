import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import './HomePage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';
import EmailUpdateForm from '../EmailUpdateForm/EmailUpdateForm';

export default function HomePage() {

    return (
        <React.Fragment>
            <div className="toolbar-align">
                <TranslateToolbar />
            </div>
            <Typography
                variant="h3"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Welcome to the Chatbox Application
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Type away in the messages page to connect with your loved ones.
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Some actions you can take on this page" />
                <CardContent>
                    <EmailUpdateForm />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
