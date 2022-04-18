import { Typography, Box, Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import "./men.css";
import CollectionDescription from "../../components/CollectionDescription";

const Mens = () => {
    return (
        <>
        <Container maxWidth="xl">
            <Typography className="collectionTitle" variant="h2" marginTop={15}>
                men's clothing
            </Typography>
            <Grid container spacing={0}>
            {/* <Container> */}
              <Grid item xs={3}>
            <Filter/>
            </Grid>
            <Grid item xs={9}>
            
            <CollectionDescription/>
 
            <Layout />
            </Grid>
            </Grid>
            </Container>
            {/* </Container> */}
            
        </>
    );
}

export default Mens;