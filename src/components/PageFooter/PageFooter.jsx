import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';

import './PageFooter.css';

export default function PageFooter({ homeNav, messengerNav, aboutMeNav }) {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    onClick={homeNav}
                    label="Home" 
                    icon={<HomeIcon />} />
                <BottomNavigationAction 
                    onClick={messengerNav}
                    label="GPT Chatbot" 
                    icon={<MessageIcon />} />
                <BottomNavigationAction 
                    onClick={aboutMeNav}
                    label="About me" 
                    icon={<GroupIcon />} />
            </BottomNavigation>
        </Box>
    );
}
