import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import "./collectionDescription.css";

const CollectionDescriptionMens = () => {
    return ( 
    
    <Box className="description">
        <img className="mensHero" src={`${process.env.PUBLIC_URL}/assets/images/keiron-crasktellanos-wr1VBs7SoBE-unsplash.jpg`} alt="stylish man sitting on wall" />

        <Box>
            <Typography variant="h6" className="descriptionTitle">
                bringing new trends into the modern world
            </Typography>
            <Box>
                <Typography className="extraText">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
            </Box>
            
        </Box>

    </Box> 
    
    
    );
}
 
export default CollectionDescriptionMens;