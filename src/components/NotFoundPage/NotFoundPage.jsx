import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import './NotFoundPage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';

export default function NotFoundPage() {

    const navigate = useNavigate();

    function navigateToLogin() {
        navigate('/login');
    }

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
                Oops! The page you requested is not available!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                Please check that the address you typed is correct, or choose any of the following options:
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Some alternative actions you can take" />
                <CardContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Login
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button variant="text" onClick={navigateToLogin}>Go to Login</Button>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Github
                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to={{ pathname: "https://github.com/abhinavgo1000"}} target="_blank">
                                Github
                            </Link>              
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            LinkedIn
                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to={{ pathname: "https://www.linkedin.com/in/abhinav-goel-41a87a20b/"}} target="_blank">
                                LinkedIn
                            </Link>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
