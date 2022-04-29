
import { Box, Card, CardMedia, Typography } from "@mui/material";

const AboutHero = () => {
    return ( 
        <Card>

        <CardMedia sx={{height: '900px', width: '100%'}}
             image={`${process.env.PUBLIC_URL}/assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg`} alt="gifts"  
             />
            
        
        </Card> 
     );
}
 
export default AboutHero;