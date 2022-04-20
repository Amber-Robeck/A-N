import { Box, Typography } from "@mui/material";

const Footer = () => {
    return ( <Box sx={{marginBottom: '50px'}}>
        <Typography sx={{color: '#aaa', textTransform: "lowercase", lineHeight: 1.7, textRendering: 'optimizeLegibility', fontSize: 12, fontWeight: 300, textAlign: 'center'}}>
        © all rights reserved A&N Clothing Limited 2022
        <br></br>
        125 Main Street, St. Paul, MN
        <br></br>
        terms // privacy policy // offers
        <br></br>
        <br></br>
        website by Amber Robeck & Nick Mullenmeister
        </Typography>
    </Box> );
}
 
export default Footer;