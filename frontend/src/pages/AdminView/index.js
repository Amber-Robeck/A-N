import React from 'react'
import { Grid, Typography } from '@mui/material'
import QuickLinks from '../../components/Admin/QuickLinks';
import ProductList from '../../components/Admin/ProductList';

const AdminView = () => {
    return (
        <>
            <Grid sx={{ mt: 20 }}>
                <Typography variant="h1" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                    {/* Products list page */}
                </Typography>
                <QuickLinks />
            </Grid>
            <ProductList />

        </>

    )
}

export default AdminView
