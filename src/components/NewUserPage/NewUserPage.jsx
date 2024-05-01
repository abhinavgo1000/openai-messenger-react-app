import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import './NewUserPage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';
import UserSignup from '../UserSignup/UserSignup';

export default function NewUserPage() {

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
                Create a new account
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Enter your credentials below to register and get started.
            </Typography>
            <Card sx={{ my: 2 }}>
            <CardHeader
                title="Enter the details for your new account" />
                <CardContent>
                    <UserSignup />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
