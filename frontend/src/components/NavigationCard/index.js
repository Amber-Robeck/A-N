import { Paper, Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./navigationCard.css";

const NavigationCard = () => {
    return (

        <Container sx={{ padding: 3 }}>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Link to="/mens" style={{ textDecoration: 'none' }}>
                    <Paper className="navCard" sx={{ padding: 2, border: 1, fontSize: 18 }} elevation={3} variant="outlined">SHOP MEN'S</Paper>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                <Link to="/womens" style={{ textDecoration: 'none' }}>
                    <Paper className="navCard" sx={{ padding: 2, border: 1, fontSize: 18 }} elevation={3} variant="outlined">SHOP WOMEN'S</Paper>
                    </Link>
                </Grid>


            </Grid>
        </Container>
    );
}

export default NavigationCard;