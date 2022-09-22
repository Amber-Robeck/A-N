import React from 'react'
// import ProductForm from '../../components/Admin/productForm';
import { Grid, Typography } from '@mui/material'
import QuickLinks from '../../components/Admin/QuickLinks';
// import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/Admin/SingleProduct';

const AdminUpdate = () => {
    return (
        <>
            <Grid sx={{ mt: 20 }}>
                <Typography variant="h1" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                    {/* Update product page */}
                </Typography>
                <QuickLinks />
            </Grid>
            <SingleProduct />

        </>

    )
}

export default AdminUpdate
