import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { Link } from "react-router-dom";


//TODO: STYLE links under 600px

const QuickLinks = () => {
    return (


        <Grid lg={3} direction="column" sx={{ position: "fixed", top: "20%", zIndex: "2" }}>
            <Typography variant="h4" verticalalign={'baseline'} textAlign={'left'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' fontSize={'1.5rem'} letterSpacing={1.2}>
                Quick options
            </Typography>
            <Grid item verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Admin HOME</Paper>
                </Link>
            </Grid>
            <Grid item verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5em'} color='#000' fontSize={'.75rem'} letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/create" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">New item</Paper>
                </Link>
            </Grid>
            {/* <Grid item verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/update" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Update item</Paper>
                </Link>
            </Grid> */}
            <Grid item verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/view" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">View items</Paper>
                </Link>
            </Grid>
            <Grid item verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/search" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Search</Paper>
                </Link>
            </Grid>
        </Grid>

    )
}

export default QuickLinks
