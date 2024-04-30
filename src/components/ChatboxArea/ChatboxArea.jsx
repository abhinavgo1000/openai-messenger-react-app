import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './ChatboxArea.css';

export default function ChatboxArea() {

    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                        '& .MuiTextField-root': { my: 1, width: '100%' },
                    }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-helperText"
                    label="Type your message"
                    placeholder="Type your message here"
                    defaultValue=""
                    helperText="Type your message above"
                    variant="filled"
                />
                <Button variant="contained">Submit</Button>
            </Box>
        </React.Fragment>
    );
}
