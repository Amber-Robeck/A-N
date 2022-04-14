// import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material'
// import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStore'

// import { useState } from 'react';
// import { BrowserRouter, Link, Route } from 'react-router-dom';

// import "./navbar.css";


// // Need to add responsiveness
// const Navbar = () => {

//     const [value, setValue] = useState(false);
//     const routes = ["/mens", "/womens", "/sale", "/about", "/"];



//     return (
//         <>

//             <AppBar position="fixed" sx={{ background: '#063970' }} >
//                 <Toolbar>

//                     <Tabs sx={{ margin: 'auto' }} textColor="inherit"
//                         value={value}
//                         onChange={(e, value) => setValue(value)} indicatorColor="secondary">

//                         <Tab label="Men" value={routes[0]} component={Link} to={routes[0]}></Tab>

//                         <Tab label="Women" value={routes[1]} component={Link} to={routes[1]}></Tab>

//                         <Box value={routes[4]} component={Link} to={routes[4]}>
//                             <img href="/" className="logo" src={`${process.env.PUBLIC_URL}/assets/images/android-chrome-512x512.png`} alt="A&N logo" />
//                         </Box>

//                         <Tab label="Sale" value={routes[2]} component={Link} to={routes[2]}></Tab>
//                         <Tab label="About" value={routes[3]} component={Link} to={routes[3]}></Tab>
//                     </Tabs>
//                     <LocalGroceryStoreRoundedIcon />
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// }



// export default Navbar;

















import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStore';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Cart from "../Cart"
const pages = ['men', 'women', 'sale', 'about'];
const cart = ['View Cart', 'Checkout'];

const Navbar = () => {
    const dispatch = useDispatch();
    const showCart = () => { dispatch(cartActions.setShowCart()); };
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

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
        <AppBar position="fixed" sx={{ background: '#063970' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Box
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img href="/" className="logo" src={`${process.env.PUBLIC_URL}/assets/images/android-chrome-512x512.png`} alt="A&N logo" />
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration: "none", color: 'black' }} to={`/${page}`}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/">
                            <img href="/" className="logo" src={`${process.env.PUBLIC_URL}/assets/images/android-chrome-512x512.png`} alt="A&N logo" />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                <Link className="links" style={{ textDecoration: "none", color: 'white' }} to={`/${page}`}>{page}</Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Check cart">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <LocalGroceryStoreRoundedIcon className='cart' />
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
                            {cart.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Cart />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;