import * as React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './App.css';

import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import ScrollTop from './components/ScrollTop/ScrollTop';
import DataDialog from './components/DataDialog/DataDialog';
import HomePage from './components/HomePage/HomePage';
import MessengerPage from './components/MessengerPage/MessengerPage';
import AboutMePage from './components/AboutMePage/AboutMePage';
import DefaultRedirect from './components/DefaultRedirect/DefaultRedirect';
import LoginPage from './components/LoginPage/LoginPage';
import NewUserPage from './components/NewUserPage/NewUserPage';
import NewProfilePage from './components/NewProfilePage/NewProfilePage';
import NewUserSuccessPage from './components/NewUserSuccessPage/NewUserSuccessPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App(props) {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate ();

    function handleClickOpen() {
      setOpen(true);
    }

    function handleClose() {
      setOpen(false);
    }

    function navigateToHome() {
      navigate('/home');
    }

    function navigateToMessenger() {
      navigate('/messenger');
    }

    function navigateToAboutMe() {
      navigate('/about-me');
    }

  return (
    <React.Fragment>
      <PageHeader handleDialogOpen={handleClickOpen} />
      <Toolbar id="back-to-top-anchor" />
      <DataDialog open={open} handleDialogClose={handleClose}></DataDialog>
      <Container>
        <Box sx={{ my: 2 }}>
          <div>
            <Routes>
              <Route path="/" element={<DefaultRedirect />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/messenger" element={<MessengerPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/new-user" element={<NewUserPage />} />
              <Route path="/new-profile" element={<NewProfilePage />} />
              <Route path="/new-user-success" element={<NewUserSuccessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <PageFooter
        homeNav={navigateToHome}
        messengerNav={navigateToMessenger}
        aboutMeNav={navigateToAboutMe} />
    </React.Fragment>
  );
}

export default App;
