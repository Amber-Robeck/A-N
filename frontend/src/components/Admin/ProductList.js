import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { Link } from "react-router-dom";

const ProductList = () => {
    const API_URL = 'http://localhost:5000/admin';
    const [productName, setProductName] = useState([]);
    const [fetchErr, setFetchErr] = useState(null);

    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not recieve data');
                const productList = await response.json();
                console.log(productList);
                setProductName(productList);
            } catch (err) {
                setFetchErr(err);
            }
        }

        fetchItems();
    }, []);
    return (
        <>
            {fetchErr &&
                <Typography variant="h2" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                    marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
                    {`Uh oh there was a problem! ${fetchErr}`}
                </Typography>}
            {productName.map((product =>
                <Grid container sx={{ mt: 20 }} direction='column' alignItems='center' key={product._id}>
                    <Grid item xs={12}>
                        <Grid item verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
                            marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'20rem'}>
                            <Typography>{product._id}</Typography>
                            <Link to={`/admin/update/${product._id}`} style={{ textDecoration: 'none' }}>
                                <Paper sx={{ padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined">{product.name}</Paper>
                            </Link>
                        </Grid>

                    </Grid>

                </Grid>
            ))
            }
        </>
    )
}

export default ProductList
