import React, { useState, useEffect } from 'react'
// import ProductForm from '../../components/Admin/productForm';
import { Button, Grid, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material'
import QuickLinks from '../../components/Admin/QuickLinks';
// import { useParams } from 'react-router-dom';

const AdminUpdate = () => {
    const API_URL_ADMIN = 'http://localhost:5000/admin';
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [radio, setRadio] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL_ADMIN);
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

    const filterProducts = (id) => {
        console.log(typeof parseInt(id))
        let filteredProd;
        if (typeof id !== 'number') {
            filteredProd = products.filter(product => product.name === id);
        } else {
            filteredProd = products.filter(product => product._id === id);
        }
        // const filteredProd = products.filter(product => product._id === id);
        // update your state with filtered product
        console.log('filtered', filteredProd)
        // console.log(product, 'product')
        return setProduct(filteredProd);
    };
    return (
        <>
            {fetchErr &&
                <Typography variant="h2" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
                    {`Uh oh there was a problem! ${fetchErr}`}
                </Typography>}
            <Grid sx={{ mt: 20 }}>
                <Typography variant="h1" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                    Update product page
                </Typography>
                <QuickLinks />
                <Grid item xs={12} textAlign={'center'}>
                    <FormControl textAlign={'center'} sx={{ m: 1, width: 300 }}>
                        <FormLabel id="onSale">Search by: </FormLabel>
                        <RadioGroup
                            textAlign={'center'}
                            row={true}
                            aria-labelledby="filter"
                            name="filter"
                            defaultValue={"id"}
                            onChange={(e) => { }}
                        >
                            <FormControlLabel value="id" control={<Radio />} label="ID" />
                            <FormControlLabel value="name" control={<Radio />} label="Name" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} textAlign={'center'}>
                    <TextField
                        sx={{ m: 1, width: 300 }}
                        variant='outlined'
                        label='Search criteria'
                        name='filterResult'
                        defaultValue={'Type to search'}
                        onChange={(e) => { setSearchFilter(e.target.value) }}
                    />
                    <Button
                        onClick={(e) => { filterProducts(searchFilter) }}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            {(product[0]._id === searchFilter || product[0].name === searchFilter) ?
                <Typography variant="h2" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#BB0011' fontSize={'32px'} letterSpacing={1.2}>
                    {`Search has found ${product[0].name}`}
                </Typography> :
                <Typography variant="h2" verticalalign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#BB0011' fontSize={'32px'} letterSpacing={1.2}>
                    {'Still looking for your items....'}
                </Typography>}
        </>

    )
}

export default AdminUpdate
