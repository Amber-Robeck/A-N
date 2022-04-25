import { Box, Typography } from "@mui/material";

const GiftingMessage = () => {
    return ( 
        <Box sx={{padding: '10px 0 15px', backgroundColor: '#f8f8f8'}}>
            <Box>
            <Typography variant="h1" verticalAlign={'baseline'} textAlign={'center'} textTransform={'lowercase'} fontWeight={300}
            marginBottom={'1em'} marginTop={'1em'} color='#000' fontSize={'32px'} letterSpacing={1.2}>
                gifting A&N clothing
            </Typography>
            
                <Typography display={'block'} width={'640px'} margin={'auto'} textAlign={'center'} lineHeight={2.0} marginBottom={'1em'} paddingBottom={'1em'} letterSpacing={1.2}>


                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </Typography>
            </Box>
            
        </Box>
        
     );
}
 
export default GiftingMessage;