import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import './NewProfileForm.css';

const addressOptions = [
    { label: '2000 Walnut Ave Fremont CA 94538' },
    { label: '8153 Running Fox Rd Columbus OH 43235' },
    { label: '1001 7th Ave New York NY 10011' }
];

export default function NewProfileForm() {

    const [gender, setGender] = React.useState('');
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

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const StyledDay = styled(PickersDay)(({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        color:
          theme.palette.mode === 'light'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
      }));

    const navigate = useNavigate ();

    function navigateToLogin() {
        navigate('/login');
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
                    <DatePicker 
                        label="Date of Birth"
                        slots={{
                            day: StyledDay
                        }} 
                        slotProps={{
                            textField: {
                                variant: 'filled',
                                required: true,
                                focused: false,
                                color: 'secondary',
                                helperText: 'MM/DD/YYYY'
                            }
                        }}
                    />
                </Box>
                <Box className="field-margin">
                    <FormControl 
                        variant="filled"
                        required
                        sx={{ width: {xs: '100%', sm: '100%', md: '50%'} }}>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            id="gender-select"
                            value={gender}
                            label="Gender"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>
                            <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <Autocomplete
                        options={addressOptions}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderInput={
                            (params) => 
                                <TextField 
                                    {...params} 
                                    helperText="Enter your address from the list above" 
                                    required variant="filled" 
                                    label="Address" 
                                 />
                        } 
                    />
                </Box>
                <Box>
                    <TextField
                        id="filled-error-helper-text"
                        label="Image Source URL"
                        type="text"
                        placeholder="Enter the URL for your image source"
                        defaultValue=""
                        helperText="The external URL must point to a valid image"
                        variant="filled"
                    />
                </Box>
                <Box>
                    <TextField
                        id="filled-error-helper-text"
                        label="Image Alt Text"
                        type="text"
                        placeholder="Enter the alt text for your image"
                        defaultValue=""
                        helperText="Enter a valid alt text for your image"
                        variant="filled"
                    />
                </Box>
                <Box className="checkbox-margin">
                    <FormGroup>
                        <FormControlLabel 
                            control={<Checkbox onClick={handleClick} />} 
                            label="I accept the Privacy Policy" />
                    </FormGroup>
                </Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="The form can now be submitted"
                    action={action}
                />
                <Box>
                    <Button variant="contained">Create Account</Button>
                    <span className="cancel-button">
                        <Button variant="outlined" onClick={navigateToLogin}>Cancel</Button>
                    </span>
                </Box>
            </Box>
        </React.Fragment>
    );
}
