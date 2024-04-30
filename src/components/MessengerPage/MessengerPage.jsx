import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import './MessengerPage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';
import ChatboxArea from '../ChatboxArea/ChatboxArea';

export default function MessengerPage() {

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
                Welcome to the Messages Page!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Start typing your messages right away to communicate with your loved ones. The service is provided by Socket.io and Express. Connect as many clients as you like and start typing in right away!
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Type your message in the textbox below." />
                <CardContent>
                    <ChatboxArea />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
