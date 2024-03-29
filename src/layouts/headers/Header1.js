import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Film Industry',
        url: '/film_industry'
    },
    {
        name: 'Business',
        url: '/business'
    },
    {
        name: 'Sports',
        url: '/sports'
    },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header1 = () => {
    const scrolltoHash = function (element_id) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

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
        <>
            <div className='bg-black p-[5px]'></div>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} className="max-w-[1024px] mx-auto mt-5">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <div className='flex'>
                            <div>
                                <img className="flex mr-1 h-[40px] w-[105px]" src="/assets/images/logo.png" alt="" />
                                {/* <svg className="flex mr-1" preserveAspectRatio="xMidYMid meet" data-bbox="23.5 23.5 153 153" viewBox="23.5 23.5 153 153" height="40" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kybbhi6c svg [data-color="1"] </style></defs>
                                <g>
                                    <path d="M158.026 23.5H41.974C31.771 23.5 23.5 31.771 23.5 41.974v116.052c0 10.203 8.271 18.474 18.474 18.474h116.052c10.203 0 18.474-8.271 18.474-18.474V41.974c0-10.203-8.271-18.474-18.474-18.474zM62.37 125.347c-8.382 1.206-16.154-4.611-17.36-12.992s4.611-16.154 12.992-17.36c8.382-1.206 16.154 4.611 17.36 12.992s-4.61 16.154-12.992 17.36zm89.787-43.89-47.193 63.061a14.978 14.978 0 0 1-12.021 6.014c-3.127 0-6.279-.974-8.976-2.992-6.633-4.964-7.985-14.364-3.022-20.997l47.193-63.061c4.964-6.633 14.363-7.985 20.997-3.022 6.632 4.964 7.985 14.365 3.022 20.997z" fill="#111010" data-color="1"></path>
                                </g>
                            </svg> */}
                            </div>
                            <div className='ml-2'>
                                <Typography
                                    className='flex'
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    // href="#app-bar-with-responsive-menu"
                                    sx={{
                                        // display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'Spacegrotesk',
                                        fontWeight: 700,
                                        // letterSpacing: '.3rem',
                                        color: 'black',
                                        textDecoration: 'none',
                                        lineHeight: '22px'
                                    }}
                                >
                                    Clestrx
                                </Typography>
                                <Typography
                                    className='flex'
                                    variant="caption"
                                    noWrap
                                    component="a"
                                    // href="#app-bar-with-responsive-menu"
                                    sx={{
                                        // display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'Helvetica',
                                        letterSpacing: 'normal',
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Discover the World of Celebrities.
                                </Typography>
                            </div>
                        </div>
                        {/* <div className="hidden md:flex">
                        <h1 className='text-[23px] font-semibold leading-7'>Clestrix</h1>
                        <p className='text-[13px]'>Discover the World of Celebrities.</p>
                    </div> */}
                        <div className='flex lg:hidden w-full'>
                            <Box sx={{ flexGrow: 1, display: { lg: 'none', md: 'flex', xs: 'flex' } }}>
                                <IconButton
                                    style={{ marginLeft: 'auto', marginRight: '0px' }}
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="black"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page, index) => {
                                        return (
                                            <MenuItem key={index} onClick={handleCloseNavMenu}>
                                                <a href={page?.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <Typography textAlign="center">{page?.name}</Typography>
                                                </a>
                                            </MenuItem>
                                        )
                                    })}
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <a onClick={() => scrolltoHash('contact_us')} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Typography textAlign="center">Contact</Typography>
                                        </a>
                                    </MenuItem>
                                    <a href="/pricing">
                                        <button className='join_clestrx join_clestrx_2'>Join Clestrx</button>
                                    </a>
                                </Menu>
                            </Box>
                        </div>

                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                        {/* <div className="flex md:hidden">
                        <h1 className='text-[23px] font-semibold leading-7'>Clestrix</h1>
                        <p className='text-[13px]'>Discover the World of Celebrities.</p>
                    </div> */}
                        <div className='hidden lg:flex justify-end w-full'>
                            {pages.map((page, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={page?.url}
                                        style={{ textDecoration: 'none', color: 'black' }}
                                    >
                                        <Button sx={{ my: 2, display: 'block' }}>
                                            {page?.name}
                                        </Button>
                                    </a>
                                )
                            })}
                            <a onClick={() => scrolltoHash('contact_us')} style={{ textDecoration: 'none', color: 'black' }}>
                                <Button sx={{ my: 2, display: 'block' }}>Contact</Button>
                            </a>
                            <a href="/pricing" className='flex justify-center items-center'>
                                <button className='join_clestrx join_clestrx_2 ml-4'>Join Clestrx</button>
                            </a>
                        </div>

                        {/* <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
        </Menu>
      </Box> */}
                    </Toolbar>
                    <div className='LogoBar'></div>
                </Container>
            </AppBar >
        </>
    );
};
export default Header1;
