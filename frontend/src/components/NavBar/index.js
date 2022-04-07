import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
    return ( 
        <>
            <AppBar position="fixed" >
                <Toolbar>
                    <Typography variant='h6'>
                        A&E - Just Testing for now
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;