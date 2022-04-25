import { Box, Card, CardMedia, Typography } from "@mui/material";
import "./giftingHero.css";

const GiftingHero = () => {
    return ( 
        <Card>

        <CardMedia sx={{height: '900px', width: '100%'}}
             image={`${process.env.PUBLIC_URL}/assets/images/freestocks-zMdOBBNPB5o-unsplash.jpg`} alt="gifts"  
             />
            <Box sx={{position: 'absolute', color: 'white', top: '50%', left: '75%', transform: 'translate(-50%)', textAlign: 'center', lineHeight: 1.3, letterSpacing: 1.4}}>
                <span className='title'>there's no better gift</span>
                <br></br>
                <span className='subtitle'>
                than one that comes from the heart
                </span>
            </Box>
        
        </Card> 
    );
}
 
export default GiftingHero;