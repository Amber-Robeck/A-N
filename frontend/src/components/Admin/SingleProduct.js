import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select, Typography, OutlinedInput, ListItemText, Checkbox } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import helpers from '../../utils/helpers'
import AdminButton from './AdminButton';


const SingleProduct = () => {
    //have to call the const what the parameter is set as in route
    const { productId } = useParams();
    // console.log(productId)
    const API_URL = 'http://localhost:5000/admin/update/' + productId;
    // console.log(API_URL)
    const [singleProduct, setSingleProduct] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);
    const [category, setCategory] = useState([]);
    const categories = helpers.categories;


    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not recieve data');
                const res = await response.json();
                setSingleProduct(res);
                setCategory(res.category);
            } catch (err) {
                setFetchErr(err);
            }
        }

        fetchItems();
    }, [API_URL]);

    return (
        <>
            <Grid >
                {fetchErr &&
                    <Typography variant="h2" vertialalign={'bottom'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
                        {`Uh oh there was a problem! ${fetchErr}`}
                    </Typography>}
                <Grid container sx={{ mt: 0 }} direction='column' alignItems='center' key={singleProduct._id}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Product name'
                            name='name'
                            defaultValue={singleProduct.name}
                            onChange={(e) => { helpers.handleChangedData(e, setSingleProduct, singleProduct) }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Price of product'
                            name='currentPrice'
                            type='number'
                            defaultValue={singleProduct.currentPrice}
                            onChange={(e) => { helpers.handleChangedData(e, setSingleProduct, singleProduct) }} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            multiline
                            label='Product description'
                            name='description'
                            defaultValue={singleProduct.description}
                            onChange={(e) => { helpers.handleChangedData(e, setSingleProduct, singleProduct) }} />
                    </Grid>
                    <Grid item xs={12}>

                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="category">Category</InputLabel>
                            <Select
                                labelId="category"
                                name='category'
                                id="multiple-checkbox"
                                multiple
                                value={category}
                                onChange={(e) => { helpers.handleChange(e, setCategory) }}
                                input={<OutlinedInput label="Category" />}
                                renderValue={(category) => category.join(', ')}
                            >
                                {
                                    categories.map((cate) => (
                                        <MenuItem key={cate} value={cate}>
                                            <Checkbox checked={category.indexOf(cate) > -1} />
                                            <ListItemText primary={cate} />
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <FormLabel id="onSale">On sale?</FormLabel>
                            <RadioGroup
                                row={true}
                                aria-labelledby="onSale"
                                name="onSale"
                                defaultValue={singleProduct.onSale}
                                onChange={(e) => { helpers.handleChangedData(e, setSingleProduct, singleProduct) }}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {singleProduct.onSale ?
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="saleType">Sale type</InputLabel>
                                <Select
                                    labelId="saleType"
                                    name='saleType'
                                    id="saleType"
                                    label="saleType"
                                    checked=''
                                    value={singleProduct.saleType}
                                    onChange={(e) => { helpers.handleChangedData(e, setSingleProduct, singleProduct) }}
                                >
                                    <MenuItem value={'get1now'}>get1now</MenuItem>
                                    <MenuItem value={'save10'}>save10</MenuItem>
                                    <MenuItem value={'newCustomer'}>newCustomer</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        : ""}


                    <AdminButton
                        buttonText={'Save Item'}
                        stateName={singleProduct}
                        clickFunc={(e) => helpers.updateData(e, singleProduct, category, API_URL, 'PUT', setSingleProduct)}
                    />
                    <AdminButton
                        buttonText={'Reset Form'}
                        stateName={singleProduct}
                        clickFunc={(e) => window.location.reload()}
                    />
                </Grid>
            </Grid >
        </>)
}

export default SingleProduct;