import { Paper, Container } from "@mui/material";
import { Grid, Item} from "@mui/material";

import "./navigationCard.css";

const NavigationCard = () => {
    return ( 
     
    <Container sx={{ padding: 3}}>
    <Grid container spacing={10}>
    <Grid item xs={6}>
        
    <Paper className="navCard" sx={{ padding: 2, border: 1, fontSize: 18}} elevation={3} variant="outlined">SHOP MEN'S</Paper> 
    
    </Grid>
    <Grid item xs={6}>
        
    <Paper className="navCard" sx={{ padding: 2, border: 1, fontSize: 18}} elevation={3} variant="outlined">SHOP WOMEN'S</Paper> 
    
    </Grid>
        
    
    </Grid>
    </Container>
    );
}
 
export default NavigationCard;