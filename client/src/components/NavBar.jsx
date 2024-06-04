import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import{
    styled
}from '@mui/material/styles';
import CCH from '../testAsset/images/homepage_photo_6217665382819412830_m_removebg_preview_1.png';


const Logo = styled("img")({
    height: `49px`,
    width: `48px`,
    position: `relative`,
});

// const settings = ['Add Doctor', 'Add Service'];

export default function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                <IconButton
                    size="large"
                    edge="start"
                    
                    aria-label="menu"
                    sx={{ mr: 2, color: '#000000'}}
                    onClick={handleOpenNavMenu}>
                </IconButton>
            </Box> */}
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
                {/* <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <MenuIcon sx={{ color: '#000000', fontSize: 30 }}/>
                    </IconButton>
                </Tooltip> 
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu> */}
                <Button variant="contained" sx={{display:props.buttonDisplay}} href="/AddFormInfo">
                    Add Slip
                </Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}