import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import "./collectionDescription.css";

const CollectionDescriptionWomens = () => {
    return ( 
    
    <Box className="description">
        <img className="mensHero" src={`${process.env.PUBLIC_URL}/assets/images/engin-akyurt-Sp4u9YqV1Zk-unsplash.jpg`} alt="stylish woman by the sea" />

        <Box>
            <Typography variant="h6" className="descriptionTitle">
                make an unforgettable impression
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
 
export default CollectionDescriptionWomens;