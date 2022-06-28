import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

//TODO mapping over categories change to multiple select, maybe use checkboxs. currently only works with one category

const SingleProduct = () => {
    //have to call the const what the parameter is set as in route
    const { productId } = useParams();
    console.log(productId)
    const API_URL = 'http://localhost:5000/admin/update/' + productId;
    const [singleProduct, setSingleProduct] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);
    // const [category, setCategory] = useState('');

    // const getCategory = async (singleProd) => {
    //     const category = await singleProd.category[0];
    //     // setCategory(category);
    //     console.log(category)
    // }
    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not recieve data');
                const singleProd = await response.json();
                // console.log(singleProduct);
                // console.log(singleProd)
                setSingleProduct(singleProd);
                // const category = singleProd.category[0];
                // setCategory(category);
                // getCategory(singleProd)

            } catch (err) {
                setFetchErr(err);
            }
        }

        fetchItems();
    }, []);

    return (
        <>
            <Grid sx={{ mt: 20 }}>
                {fetchErr &&
                    <Typography variant="h2" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
                        {`Uh oh there was a problem! ${fetchErr}`}
                    </Typography>}
                <Grid container sx={{ mt: 20 }} direction='column' alignItems='center' key={singleProduct._id}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Product name'
                            defaultValue={singleProduct.name} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Price of product'
                            type='number'
                            defaultValue={singleProduct.currentPrice} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            multiline
                            label='Product description'
                            defaultValue={singleProduct.description} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="category">Category</InputLabel>
                            {singleProduct.category?.map((cate, index) => (
                                <Select
                                    key={index}
                                    labelId="category"
                                    id="category"
                                    label="Category"
                                    // multiple
                                    defaultValue={cate}
                                // onChange={handleChange}
                                >
                                    <MenuItem value={'mens'}>Mens</MenuItem>
                                    <MenuItem value={'womens'}>Womens</MenuItem>
                                    <MenuItem value={'childrens'}>Childrens</MenuItem>
                                </Select>
                            )
                            )
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormLabel id="onSale">On sale?</FormLabel>
                            <RadioGroup
                                row={true}
                                aria-labelledby="onSale"
                                name="radio-buttons-group"
                                defaultValue={singleProduct.onSale}
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
                                value={singleProduct.saleType}
                            // onChange={handleChange}
                            >
                                <MenuItem value={'get1now'}>get1now</MenuItem>
                                <MenuItem value={'save10'}>save10</MenuItem>
                                <MenuItem value={'newCustomer'}>newCustomer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>)
}

export default SingleProduct;