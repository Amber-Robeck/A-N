import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select } from '@mui/material'
import { height } from '@mui/system'
import React, { useState, useEffect } from 'react'

//This will be dynamic depending upon users choice, create, update
//TODO: Bring data from api to prefill forms
//TODO: Ternary for if onSale is true show/false hide
//TODO: Add variants after data modeling is completed, checkbox for size input for number in inventory
//TODO: Collect data from user and post/put
//TODO: Complete on change for selects
//TODO: Button for submit add/update

const ProductForm = () => {
    return (
        <Grid container sx={{ mt: 20 }} direction='column' alignItems='center'>
            <Grid item xs={12}>
                <TextField
                    sx={{ m: 1, width: 300 }}
                    variant='outlined'
                    label='Product name' />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    sx={{ m: 1, width: 300 }}
                    variant='outlined'
                    label='Price of product'
                    type='number' />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    sx={{ m: 1, width: 300 }}
                    variant='outlined'
                    multiline
                    label='Product description' />
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        // defaultValue='Mens'
                        label="Category"
                    // onChange={handleChange}
                    >
                        {/* will need to add a value */}
                        <MenuItem>Mens</MenuItem>
                        <MenuItem>Womens</MenuItem>
                        <MenuItem>Childrens</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <FormLabel id="onSale">On sale?</FormLabel>
                    <RadioGroup
                        row={true}
                        aria-labelledby="onSale"
                        defaultValue="false"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="saleType">Sale type</InputLabel>
                    <Select
                        labelId="saleType"
                        id="saleType"
                        // defaultValue='get1now'
                        label="saleType"
                    // onChange={handleChange}
                    >
                        {/* will need to add a value */}
                        <MenuItem>get1now</MenuItem>
                        <MenuItem>save10</MenuItem>
                        <MenuItem>newCustomer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default ProductForm
