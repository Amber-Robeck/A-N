import { Box } from "@mui/system";

import "./collectionDescription.css";

const CollectionDescription = () => {
    return ( <Box>
        <img className="mensHero" src={`${process.env.PUBLIC_URL}/assets/images/keiron-crasktellanos-wr1VBs7SoBE-unsplash.jpg`} alt="stylish man sitting on wall" />
    </Box> );
}
 
export default CollectionDescription;