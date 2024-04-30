import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import './UserLogin.css';

export default function UserLogin() {

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
                <div>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Email"
                        placeholder="Ex. pat@example.com"
                        defaultValue=""
                        helperText="Please enter a valid email address"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Password"
                        placeholder="Enter your password"
                        defaultValue=""
                        helperText="Please enter a valid password"
                        variant="filled"
                    />
                </div>
                <div className="checkbox-margin">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Remember my credentials" />
                    </FormGroup>
                </div>
                <div>
                    <Button variant="contained">Sign In</Button>
                </div>
            </Box>
        </React.Fragment>
    );
}
