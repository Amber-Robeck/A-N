import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/Admin/productForm';
import { Grid, Typography, Paper, Container } from '@mui/material'
import { Link } from "react-router-dom";

// TODO: Set up route for reading products
// TODO: Set up route for creating products
// TODO: Set up route for update product
// TODO: Search bar for finding products, autocomplete/mongo
// TODO: Login for admin users only/block routes without credentials
const Admin = () => {
    return (
        <>
            <Grid sx={{ mt: 20 }}>
                <Typography variant="h1" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                    Welcome to the admin page
                </Typography>
                <Typography variant="h4" verticalAlign={'baseline'} textAlign={'left'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' fontSize={'1.5rem'} letterSpacing={1.2}>
                    Quick options
                </Typography>
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
                    <Link to="/admin/items" style={{ textDecoration: 'none' }}>
                        <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">View items</Paper>
                    </Link>
                </Grid>
                <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                    <Link to="/admin/update/:prodid" style={{ textDecoration: 'none' }}>
                        <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Search</Paper>
                    </Link>
                </Grid>
            </Grid>
        </>

    )
}

export default Admin
