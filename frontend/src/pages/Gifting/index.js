import { Box, Grid } from "@mui/material";
import GiftingHero from "../../components/GiftingHero";
import GiftingMessage from "../../components/GiftingMessage";

const Gifting = () => {
    return ( 
        <Box>
            <Grid>
                <GiftingHero/>
                <GiftingMessage/>
            </Grid>

        </Box>
     );
}
 
export default Gifting;