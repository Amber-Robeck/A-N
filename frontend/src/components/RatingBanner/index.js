import { Box, List, ListItem, ListItemIcon, Grid, Rating } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import "./ratingBanner.css";


const RatingBanner = () => {

    

    return (
        <Box sx={{ flexGrow: 1 }} className="items">
            <List  >
                
                    <Grid container spacing={3}>

                        <Grid item xs={4}>
                            
                            <ListItem className="singleItem">
                                <ListItemIcon  className="singleIcon">
                                    <PaidIcon sx={{fontSize: 63, color: 'black'}} />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className="singleItem">
                                1 dollar donated
                                <br></br>
                                 for every order
                            </ListItem>
                         
                        </Grid>

                        <Grid item xs={4}>
                            <ListItem className="singleItem">
                                <ListItemIcon className="singleIcon">
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} sx={{fontSize: 55, color: 'black', marginTop: 0.7, marginBottom: 0.5 }} readOnly  />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className="singleItem">
                                rated for excellence
                                <br></br>
                                on reviews.io
                            </ListItem>
                        </Grid>

                        <Grid item xs={4}>
                            <ListItem className="singleItem">
                                <LocalShippingOutlinedIcon sx={{fontSize: 63}} className="singleIcon">
                                    <PaidIcon />
                                </LocalShippingOutlinedIcon>
                            </ListItem>
                            <ListItem className="singleItem">
                                free returns on
                                <br></br>
                                all purchases
                            </ListItem>
                        </Grid>
                    </Grid>
              
            </List>

        </Box>
    );
}

export default RatingBanner;