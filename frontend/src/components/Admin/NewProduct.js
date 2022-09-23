import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select, OutlinedInput, ListItemText, Checkbox, Link, Paper } from '@mui/material'
import React, { useState } from 'react';





const NewProduct = () => {
    const [newProduct, setNewProduct] = useState([]);
    const API_URL = 'http://localhost:5000/admin/create';
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

    const handleChangedData = (event) => {
        console.log("event", event.target);
        const {
            target: { name, value },
        } = event;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    }

    const updateData = async (e) => {
        e.preventDefault();
        console.log(e.target)
        const data = {
            name: newProduct.name,
            description: newProduct.description,
            category: category,
            originalPrice: newProduct.originalPrice,
            currentPrice: newProduct.currentPrice,
            onSale: newProduct.onSale,
            saleType: newProduct.saleType,
            variations: newProduct.variations,
            // availableSizes: newProduct.availableSizes,
        }
        console.log("data", data)
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        await response.json();
        // console.log('updatedReturn', updatedProduct)
        setNewProduct(data);
        window.alert("New product saved")
    }
    return (
        <>
            <Grid >
                <Grid container sx={{ mt: 0 }} direction='column' alignItems='center' key={newProduct._id}>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Product name'
                            name='name'
                            defaultValue={newProduct.name}
                            onChange={handleChangedData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            label='Price of product'
                            name='currentPrice'
                            type='number'
                            defaultValue={newProduct.currentPrice}
                            onChange={handleChangedData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={{ m: 1, width: 300 }}
                            variant='outlined'
                            multiline
                            label='Product description'
                            name='description'
                            defaultValue={newProduct.description}
                            onChange={handleChangedData}
                        />
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
                                name="onSale"
                                defaultValue={newProduct.onSale}
                                onChange={handleChangedData}
                            >
                                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                <FormControlLabel value="false" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {newProduct.onSale ?
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="saleType">Sale type</InputLabel>
                                <Select
                                    labelId="saleType"
                                    name='saleType'
                                    id="saleType"
                                    label="saleType"
                                    checked=''
                                    value={newProduct.saleType}
                                    onChange={handleChangedData}
                                >
                                    <MenuItem value={'get1now'}>get1now</MenuItem>
                                    <MenuItem value={'save10'}>save10</MenuItem>
                                    <MenuItem value={'newCustomer'}>newCustomer</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        : ""}
                    <Grid item vertialalign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to={"/admin/update/" + newProduct._id} onClick={(e) => updateData(e)} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Save Item</Paper>
                        </Link>
                    </Grid>
                    <Grid item vertialalign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to={"/admin/update/" + newProduct._id} onClick={(e) => window.location.reload()} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Reset Form</Paper>
                        </Link>
                    </Grid>
                </Grid>
            </Grid >
        </>

    )
}

export default NewProduct;