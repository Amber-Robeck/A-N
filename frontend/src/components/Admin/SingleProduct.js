import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select, Typography, OutlinedInput, ListItemText, Checkbox, Link, Paper, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


//TODO working on category checkbox, needing to map and display current categories

const SingleProduct = () => {
    //have to call the const what the parameter is set as in route
    const { productId } = useParams();
    // console.log(productId)
    const API_URL = 'http://localhost:5000/admin/update/' + productId;
    // console.log(API_URL)
    const [singleProduct, setSingleProduct] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);
    const [category, setCategory] = useState([]);

    const categories = [
        'mens',
        'womens',
        'childrens',
        'shirt',
    ];

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    //currently working to change name state, need to add other data as well before calling api and updating
    const handleChangedData = (event) => {
        console.log(event.target.value);
        const {
            target: { name, value },
        } = event;
        setSingleProduct({
            ...singleProduct,
            name: value,
        });
        console.log("singleProduct", singleProduct)
    }

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not recieve data');
                const singleProd = await response.json();
                setSingleProduct(singleProd);
                setCategory(singleProd.category);
            } catch (err) {
                setFetchErr(err);
            }
        }

        fetchItems();
    }, [API_URL]);

    const updateData = async (e) => {
        e.preventDefault();
        console.log(e.target)
        const data = {
            name: singleProduct.name,
            description: singleProduct.description,
            category: singleProduct.category,
            originalPrice: singleProduct.originalPrice,
            currentPrice: singleProduct.currentPrice,
            onSale: singleProduct.onSale,
            saleType: singleProduct.saleType,
            variations: singleProduct.variations,
            // availableSizes: singleProduct.availableSizes,
        }
        console.log("data", data)
        const response = await fetch(API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const updatedProduct = await response.json();
        console.log(updatedProduct)
        setSingleProduct(updatedProduct);
    }


    return (
        <>
            <Grid >
                {fetchErr &&
                    <Typography variant="h2" verticalAlign={'bottom'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
                        {`Uh oh there was a problem! ${fetchErr}`}
                    </Typography>}
                <Grid container sx={{ mt: 0 }} direction='column' alignItems='center' key={singleProduct._id}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Product name'
                            defaultValue={singleProduct.name}
                            onChange={handleChangedData} />
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
                            <Select
                                labelId="category"
                                id="multiple-checkbox"
                                multiple
                                value={category}
                                onChange={handleChange}
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
                    <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to="/admin" style={{ textDecoration: 'none' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Save Item</Paper>
                        </Link>
                    </Grid>
                    <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to={"/admin/update/" + singleProduct._id} onClick={updateData} style={{ textDecoration: 'none' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Reset Form</Paper>
                        </Link>
                        <Button onClick={(e) => updateData(e)}>Update</Button>
                    </Grid>
                </Grid>
            </Grid >
        </>)
}

export default SingleProduct;