import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App(props) {
  const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
      setOpen(true);
    }
    function handleClose() {
      setOpen(false);
    }

  return (
    <React.Fragment>
      <PageHeader handleDialogOpen={handleClickOpen} />
      <Toolbar id="back-to-top-anchor" />
      <DataDialog open={open} handleDialogClose={handleClose}></DataDialog>
      <Container>
        <Box sx={{ my: 2 }}>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<DefaultRedirect />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/messenger" element={<MessengerPage />} />
                <Route path="/about-me" element={<AboutMePage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <PageFooter />
    </React.Fragment>
  );
}

export default App;
