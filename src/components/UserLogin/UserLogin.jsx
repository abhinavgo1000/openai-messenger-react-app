import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import './UserLogin.css';

export default function UserLogin() {

    const navigate = useNavigate();

    function navigateToSignup() {
        navigate('/new-user');
    }

    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                        '& .MuiTextField-root': { my: 1, width: {xs: '100%', sm: '100%', md: '50%'} },
                    }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Email"
                        type="email"
                        placeholder="Ex. pat@example.com"
                        defaultValue=""
                        helperText="Please enter a valid email address"
                        variant="filled"
                    />
                </Box>
                <Box>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        defaultValue=""
                        helperText="Please enter a valid password"
                        variant="filled"
                    />
                </Box>
                <Box className="checkbox-margin">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Remember my credentials" />
                    </FormGroup>
                </Box>
                <Box>
                    <Button variant="contained">Sign In</Button>
                </Box>
                <p>New User? <Button variant="text" onClick={navigateToSignup}>Create a new account</Button></p>
            </Box>
        </React.Fragment>
    );
}
