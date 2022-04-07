import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStore'

import styled from '@emotion/styled';

import { useState } from 'react';


// Need to add responsiveness
const Navbar = () => {

    const [value, setValue] = useState();

    return (
        <>
            <AppBar position="fixed" sx={{ background: '#063970' }} >
                <Toolbar>
                    <Tabs sx={{ margin: 'auto' }} textColor="inherit" 
                    value={value} 
                    onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                        <Tab label="Men"></Tab>
                        <Tab label="Women"></Tab>
                    
                    <Typography variant='h4' >
                        A&N
                    </Typography>
                        <Tab label="Sale"></Tab>
                        <Tab label="About"></Tab>
                    </Tabs>
                    <LocalGroceryStoreRoundedIcon />
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;