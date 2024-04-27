import * as React from 'react';
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
      {open && <DataDialog open={open} handleDialogClose={handleClose} />}
      <Container>
        <Box sx={{ my: 2 }}>
          <HomePage />
          {[...new Array(20)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
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
