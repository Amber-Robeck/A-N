import { Box, Container, List, ListItemIcon, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

import "./footer.css";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <Container>
            <Box className="socialMedia">
                <List className="socialMediaIcons" sx={{ textAlign: 'center', marginTop: 5 }}>
                    <ListItemIcon sx={{ justifyContent: 'center', color: 'black' }} >
                        <TwitterIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemIcon sx={{ justifyContent: 'center', color: 'black' }}>
                        <FacebookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemIcon sx={{ justifyContent: 'center', color: 'black' }}>
                        <InstagramIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemIcon sx={{ justifyContent: 'center', color: 'black' }}>
                        <PinterestIcon fontSize="small" />
                    </ListItemIcon>
                </List>
                <Box  sx={{ borderBottom: 'solid', color: '#e7dbdb', display: "block", width: '320px', margin: 'auto'}}>
                    <Typography
                        sx={{ marginTop: '10px', marginBottom: '17px', textTransform: 'lowercase', lineHeight: 1.5, textAlign: 'center', textRendering: 'optimizeLegibility', fontWeight: 'bold', fontSize: "small", color: 'black' }}>
                        #A&Nfashion
                    </Typography>
                </Box>
                <Box sx={{ display: "block", width: '20px', margin: 'auto'}}>
                    <Link to='/'>
                    <img className="bottomLogo" src={`${process.env.PUBLIC_URL}/assets/images/android-chrome-512x512.png`} alt="A&N logo"/>
                    </Link>
                </Box>
            </Box>
            <Box sx={{ marginBottom: '50px', marginTop: '25px' }}>
                <Typography sx={{ color: '#aaa', textTransform: "lowercase", lineHeight: 1.7, textRendering: 'optimizeLegibility', fontSize: 12, fontWeight: 300, textAlign: 'center' }}>
                    © all rights reserved A&N Clothing Limited 2022
                    <br></br>
                    125 Main Street, St. Paul, MN
                    <br></br>
                    terms // privacy policy // offers
                    <br></br>
                    <br></br>
                    website by Amber Robeck & Nick Mullenmeister
                </Typography>
            </Box>

        </Container>);
}

export default Footer;