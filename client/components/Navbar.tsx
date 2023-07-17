import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from "@mui/material/IconButton";
import { Icon } from '@mui/material';


function Navbar() {

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl" sx={{minWidth: '100%', bgcolor: '#4e4e4e', boxShadow: '0px 3px 2px -1px rgba(0,0,0,0.1)'}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: '#ffff',
              textDecoration: 'none',
            }}
          >
            PulsarPortrait
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='Docs'
                sx={{ my: 2, color: '#ffff', display: 'block' }}
              >
                Docs
              </Button>
              <Button
                key='Demo'
                sx={{ my: 2, color: '#ffff', display: 'block' }}
              >
                Demo
              </Button>
              <Button
                href='#contact-section'
                key='Contact'
                sx={{ my: 2, color: '#ffff', display: 'block' }}
              >
                Contact
              </Button>
              <IconButton href='https://github.com/oslabs-beta/PulsarPortrait' >
                <GitHubIcon sx={{color: '#ffff'}}/>
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;