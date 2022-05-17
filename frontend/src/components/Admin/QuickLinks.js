import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { Link } from "react-router-dom";

const QuickLinks = () => {
    return (

        <>
            <Typography variant="h4" verticalAlign={'baseline'} textAlign={'left'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' fontSize={'1.5rem'} letterSpacing={1.2}>
                Quick options
            </Typography>
            <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Admin HOME</Paper>
                </Link>
            </Grid>
            <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5em'} color='#000' fontSize={'.75rem'} letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/create" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">New item</Paper>
                </Link>
            </Grid>
            <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/update" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Update item</Paper>
                </Link>
            </Grid>
            <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/view" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">View items</Paper>
                </Link>
            </Grid>
            <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                <Link to="/admin/update/:prodid" style={{ textDecoration: 'none' }}>
                    <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Search</Paper>
                </Link>
            </Grid>
        </>
    )
}

export default QuickLinks
