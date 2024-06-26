import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './AboutMePage.css';

import TranslateToolbar from '../TranslateToolbar/TranslateToolbar';

export default function AboutMePage() {

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
                Hello everyone!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ display: { xs: 'block', sm: 'block' } }}
            >      
                I am Abhinav Goel, a frontend web developer with a specialization in Angular. I am currently learning React, Node.js and Java to transition to more full stack roles.
            </Typography>
            <Typography
                variant="p"
                gutterBottom
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Please find the links to my Github and LinkedIn below.
            </Typography>
            <Card sx={{ my: 2 }}>
                <CardHeader
                    title="Links to my Github and LinkedIn" />
                <CardContent>
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
