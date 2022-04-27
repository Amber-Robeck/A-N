import { Box, Grid } from "@mui/material";
import GiftingHero from "../../components/GiftingHero";
import GiftingMessage from "../../components/GiftingMessage";
import GiftingSquares from "../../components/GiftingSquares";

const Gifting = () => {
    return ( 
        <Box>
            <Grid>
                <GiftingHero/>
                <GiftingMessage/>
                <GiftingSquares/>
            </Grid>
        </Box>
     );
}
 
export default Gifting;