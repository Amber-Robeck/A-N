import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AboutHero from "../../components/AboutHero";
import AboutMessage from "../../components/AboutMessage";

const About = () => {
    return ( <Box>
        <Grid>
            <AboutHero/>
            <AboutMessage/>
        </Grid>
    </Box> );
}
 
export default About;