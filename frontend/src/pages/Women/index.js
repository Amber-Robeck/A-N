import { Typography, Box, Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import CollectionDescriptionWomens from "../../components/CollectionDescriptionWomens";
import "./women.css";

const Womens = () => {
    return ( 
        <>
        <Container maxWidth="xl">
            <Typography className="collectionTitle" variant="h2" marginTop={15}>
                women's clothing
            </Typography>
            <Grid container spacing={0}>
            {/* <Container> */}
              <Grid item xs={3}>
            <Filter/>
            </Grid>
            <Grid item xs={9}>
            
            <CollectionDescriptionWomens/>
 
            <Layout />
            </Grid>
            </Grid>
            </Container>
            {/* </Container> */}
            
        </>
     );
}
 
export default Womens;