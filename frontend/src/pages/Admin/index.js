import React, { useEffect, useState } from 'react'
import ProductForm from '../../components/Admin/productForm';
import { Grid, Typography } from '@mui/material'

//Currently commented out api call to test product form

const Admin = () => {
    // const API_URL = 'http://localhost:5000/admin'
    // const [products, setProducts] = useState([]);
    // const [fetchErr, setFetchErr] = useState(null);
    // useEffect(() => {

    //     const fetchItems = async () => {
    //         try {
    //             const response = await fetch(API_URL);
    //             if (!response.ok) throw Error('Did not recieve data');
    //             const productList = await response.json();
    //             console.log(productList);
    //             setProducts(productList);
    //         } catch (err) {
    //             setFetchErr(err);
    //         }
    //     }

    //     fetchItems();
    // }, []);
    // return (<>
    //     <Grid sx={{ mt: 20 }}>
    //         <Typography variant="h1" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
    //             marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
    //             This is the admin page
    //         </Typography>
    //         {fetchErr &&
    //             <Typography variant="h2" verticalAlign={'baseline'} textAlign={'center'} fontWeight={300}
    //                 marginBottom={'1em'} marginTop={'1em'} color='#FF0000' fontSize={'32px'} letterSpacing={1.2}>
    //                 {`Uh oh there was a problem! ${fetchErr}`}
    //             </Typography>}
    //         {products.map((product =>
    //             <Typography key={product._id} variant="h3" textAlign={'center'} fontWeight={300}
    //                 marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
    //                 {product.name}
    //                 <br />
    //                 {product.description}
    //             </Typography>
    //         ))}

    //     </Grid>
    //     <Grid>

    //         <ProductForm />
    //     </Grid>
    // </>
    // )
    return (
        <ProductForm />
    )
}

export default Admin
