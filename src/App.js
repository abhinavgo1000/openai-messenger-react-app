import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './App.css';

import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
  });
  
  const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
          '#back-to-top-anchor',
      );
  
      if (anchor) {
          anchor.scrollIntoView({
              block: 'center',
          });
      }
  };
  
  return (
      <Fade in={trigger}>
          <Box
              onClick={handleClick}
              role="presentation"
              sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
              {children}
          </Box>
      </Fade>
  );
}

function App(props) {
  return (
    <React.Fragment>
      <PageHeader></PageHeader>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
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
      <PageFooter></PageFooter>
    </React.Fragment>
  );
}

export default App;
