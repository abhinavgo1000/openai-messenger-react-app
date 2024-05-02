import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './UserSignup.css';

export default function UserSignup() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const navigate = useNavigate ();

    function navigateToLogin() {
        navigate('/login');
    }

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

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
                        label="Name"
                        type="text"
                        placeholder="Enter your Name"
                        defaultValue=""
                        helperText="Please enter a valid name"
                        variant="filled"
                    />
                </Box>
                <Box>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Username"
                        type="text"
                        placeholder="Enter your Username"
                        defaultValue=""
                        helperText="Please enter a valid username"
                        variant="filled"
                    />
                </Box>
                <Box>
                    <TextField
                        required
                        error
                        id="filled-error-helper-text"
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter your Phone Number"
                        defaultValue=""
                        helperText="Please enter a valid phone number"
                        variant="filled"
                    />
                </Box>
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
                        <FormControlLabel 
                            control={<Checkbox onClick={handleClick} />} 
                            label="I accept the Terms and Conditions" />
                    </FormGroup>
                </Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="The form can now be submitted"
                    action={action}
                />
                <Box className="toggle-margin">
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch />}
                            label="Sign me up for email notifications about my account" />
                    </FormGroup>
                </Box>
                <Box>
                    <Button variant="contained">Create Account</Button>
                    <span className="cancel-button">
                        <Button variant="outlined" onClick={navigateToLogin}>Cancel</Button>
                    </span>
                </Box>
                <p>Already have an account? 
                    <Button variant="text" onClick={navigateToLogin}>Sign in</Button>
                </p>
            </Box>
        </React.Fragment>
    );
}
