import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select } from '@mui/material'
// import { height } from '@mui/system'
import React, { useState, useEffect } from 'react'

//This will be dynamic depending upon users choice, create, update
//TODO: Bring data from api to prefill forms
//TODO: Ternary for if onSale is true show/false hide
//TODO: Add variants after data modeling is completed, checkbox for size input for number in inventory
//TODO: Collect data from user and post/put
//TODO: Complete on change for selects
//TODO: Button for submit add/update

const ProductForm = () => {
    const API_URL = 'http://localhost:5000/admin';
    const [products, setProducts] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not recieve data');
                const productList = await response.json();
                console.log(productList);
                setProducts(productList);
            } catch (err) {
                setFetchErr(err);
            }
        }

        fetchItems();
    }, []);

    return (
        <>
            {products.map((product =>
                <Grid container sx={{ mt: 20 }} direction='column' alignItems='center' key={product._id}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Product name'
                            defaultValue={product.name} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Price of product'
                            type='number'
                            defaultValue={product.currentPrice} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            multiline
                            label='Product description'
                            defaultValue={product.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="category">Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                label="Category"
                                defaultValue={product.category[0]}
                            // onChange={handleChange}
                            >
                                <MenuItem value={'mens'}>Mens</MenuItem>
                                <MenuItem value={'womens'}>Womens</MenuItem>
                                <MenuItem value={'childrens'}>Childrens</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormLabel id="onSale">On sale?</FormLabel>
                            <RadioGroup
                                row={true}
                                aria-labelledby="onSale"
                                name="radio-buttons-group"
                                defaultValue={product.onSale}
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
                                label="saleType"
                                value={product.saleType}
                            // onChange={handleChange}
                            >
                                <MenuItem value={'get1now'}>get1now</MenuItem>
                                <MenuItem value={'save10'}>save10</MenuItem>
                                <MenuItem value={'newCustomer'}>newCustomer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            ))
            }
        </>)
}

export default ProductForm
