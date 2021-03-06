import React from 'react'
import { Grid, Typography } from '@mui/material'
import QuickLinks from '../../components/Admin/QuickLinks';
// TODO: Turn quick links into a reuseable component
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
                <QuickLinks />
            </Grid>
        </>

    )
}

export default Admin
