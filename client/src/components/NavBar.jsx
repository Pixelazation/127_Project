import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import{
    styled
}from '@mui/material/styles';

import CCH from '../assets/logo.png';


const Logo = styled("img")({
    height: `49px`,
    width: `48px`,
    position: `relative`,
});


export default function ResponsiveAppBar(props) {
  return (
    <AppBar position="static" sx={{backgroundColor:'#92C1F0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Logo src={CCH} alt={"LOGO"}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href={`http://${window.location.host}`}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: '#000000',
                    textDecoration: 'none',
                }}>
                Care and Cure Hub
            </Typography>

            <Typography
                variant="h5"
                noWrap
                component="a"
                href={window.location.host}
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#000000',
                textDecoration: 'none',
                }}>
                Care and Cure Hub
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}/>
            <Box sx={{ flexGrow: 0 }}>
                <Button variant="contained" sx={{display:props.buttonDisplay}} href="/AddFormInfo">
                    Add Slip
                </Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}