import { TextField, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'

const ProductForm = () => {
    return (
        <form>
            <Grid container sx={{ mt: 20 }}>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label='Product name' />
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}

export default ProductForm
