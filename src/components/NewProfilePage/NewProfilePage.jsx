import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';
import NewProfileForm from '../NewProfileForm/NewProfileForm';

import './NewProfilePage.css';

export default function NewProfilePage() {

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
                Now enter your profile details
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Tell us a bit more about you so that we can know you better.
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Enter your profile details" />
                <CardContent>
                    <NewProfileForm />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
