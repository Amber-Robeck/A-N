import { Paper, Container } from "@mui/material";
import { Grid, Item} from "@mui/material";


const NavigationCard = () => {
    return ( 
     
    <Container>
    <Grid container spacing={3}>
    <Grid item xs={6}>
        
    <Paper elevation={3}>Men</Paper> 
    
    </Grid>
    <Grid item xs={6}>
        
    <Paper elevation={3}>Women</Paper> 
    
    </Grid>
        
    
    </Grid>
    </Container>
    );
}
 
export default NavigationCard;