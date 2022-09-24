import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, InputLabel, Select, OutlinedInput, ListItemText, Checkbox, Link, Paper } from '@mui/material'
import React, { useState } from 'react';
import helpers from '../../utils/helpers'
import AdminButton from './AdminButton';

const NewProduct = () => {
    const [newProduct, setNewProduct] = useState([]);
    const API_URL = 'http://localhost:5000/admin/create';
    const [category, setCategory] = useState([]);
    const categories = helpers.categories;

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
                            onChange={(e) => { helpers.handleChangedData(e, setNewProduct, newProduct) }}
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
                            onChange={(e) => { helpers.handleChangedData(e, setNewProduct, newProduct) }}
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
                            onChange={(e) => { helpers.handleChangedData(e, setNewProduct, newProduct) }}
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
                                defaultValue={newProduct.onSale}
                                onChange={(e) => { helpers.handleChangedData(e, setNewProduct, newProduct) }}
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
                                    onChange={(e) => { helpers.handleChangedData(e, setNewProduct, newProduct) }}
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
                        stateName={newProduct}
                        clickFunc={(e) => helpers.updateData(e, newProduct, category, API_URL, 'POST', setNewProduct, 'Item added to inventory')}
                    />
                    <AdminButton
                        buttonText={'Reset Form'}
                        stateName={newProduct}
                        clickFunc={(e) => window.location.reload()}
                    />
                    {/* <Grid item vertialalign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to={"/admin/update/" + newProduct._id} onClick={(e) => helpers.updateData(e, newProduct, category, API_URL, 'POST', setNewProduct, 'Item added to inventory')} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Save Item</Paper>
                        </Link>
                    </Grid> */}
                    {/* <Grid item vertialalign={'baseline'} textAlign={'center'} fontWeight={300}
                        marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
                        <Link to={"/admin/update/" + newProduct._id} onClick={(e) => window.location.reload()} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                            <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">Reset Form</Paper>
                        </Link>
                    </Grid> */}
                </Grid>
            </Grid >
        </>

    )
}

export default NewProduct;