import { Typography, Box, Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import Filter from "../../components/Filter";
import CollectionDescriptionMens from "../../components/CollectionDescriptionMens";
import "./men.css";

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
            
            <CollectionDescriptionMens/>
 
            <Layout />
            </Grid>
            </Grid>
            </Container>
            {/* </Container> */}
            
        </>
    );
}

export default Mens;