import React from 'react';
import { Grid, Typography } from '@mui/material'
import QuickLinks from '../../components/Admin/QuickLinks';
import NewProduct from '../../components/Admin/NewProduct';

const AdminNew = () => {
    return (
        <>
            <Grid sx={{ mt: 20 }}>
                <Typography variant="h1" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                    Create your new item
                </Typography>
                <QuickLinks />
            </Grid>
            <NewProduct />

        </>

    )
}

export default AdminNew;