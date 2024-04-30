import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import './LoginPage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';
import UserLogin from '../UserLogin/UserLogin';

export default function LoginPage() {

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
                Welcome to Chatbox Application!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Please sign in or sign up to begin chatting away with your loved ones.
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Enter your login details" />
                <CardContent>
                    <UserLogin />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
