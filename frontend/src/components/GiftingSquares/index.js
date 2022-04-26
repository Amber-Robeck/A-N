import { Grid, Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./giftingSquares.css";

const GiftingSquares = () => {
    return (
        <>
            {/* First set of squares */}
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid item xs={6}>
                        <Paper square elevation={0} sx={{ height: '500px' }}>
                            <Box sx={{ justifyContent: 'center', minHeight: '500px' }}>
                                <Typography variant="h2" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '17%', textAlign: 'left', fontWeight: '300px', fontSize: '28px', lineHeight: '1.3em' }}>
                                    mother's day gifts
                                </Typography>
                                <Box sx={{ border: 'solid', color: '#e7dbdb', display: "block", marginLeft: '10%', marginTop: '35px', marginBottom: '10px', paddingRight: '10%', width: '10px', textAlign: 'left' }}>

                                </Box>

                                <Box>
                                    <Typography variant="h5" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%', textAlign: 'left', fontWeight: '300px', fontSize: '16px', lineHeight: '1.5em' }}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    </Typography>
                                </Box>

                                <Box sx={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '28px' }}>
                                    <Link to="/women" style={{ textDecoration: 'none' }}>
                                        <Paper className="motherButton" sx={{ width: '350px', padding: 2, fontSize: 14 }} elevation={0} >SHOP MOTHER'S DAY GIFTS</Paper>
                                    </Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className='giftingImage' square elevation={0} sx={{ height: '500px' }}>

                        </Paper>

                    </Grid>
                </Grid>
            </Box>

            {/* Second set of squares */}
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid item xs={6}>
                        <Paper className='hisGiftingImage' square elevation={0} sx={{ height: '500px' }}>

                        </Paper>

                    </Grid>


                    <Grid item xs={6}>
                        <Paper square elevation={0} sx={{ height: '500px' }}>
                            <Box sx={{ justifyContent: 'center', minHeight: '500px' }}>
                                <Typography variant="h2" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '17%', textAlign: 'left', fontWeight: '300px', fontSize: '28px', lineHeight: '1.3em' }}>
                                    gifts for him
                                </Typography>
                                <Box sx={{ border: 'solid', color: '#e7dbdb', display: "block", marginLeft: '10%', marginTop: '35px', marginBottom: '10px', paddingRight: '10%', width: '10px', textAlign: 'left' }}>

                                </Box>

                                <Box>

                                    <Typography variant="h5" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%', textAlign: 'left', fontWeight: '300px', fontSize: '16px', lineHeight: '1.5em' }}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    </Typography>
                                </Box>

                                <Box sx={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '28px' }}>
                                    <Link to="/men" style={{ textDecoration: 'none' }}>
                                        <Paper className="motherButton" sx={{ width: '350px', padding: 2, fontSize: 14 }} elevation={0} >EXPLORE GIFTS FOR HIM</Paper>
                                    </Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                </Grid>
            </Box>

            {/* Third set of squares */}
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                    <Grid item xs={6}>
                        <Paper square elevation={0} sx={{ height: '500px' }}>
                            <Box sx={{ justifyContent: 'center', minHeight: '500px' }}>
                                <Typography variant="h2" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '17%', textAlign: 'left', fontWeight: '300px', fontSize: '28px', lineHeight: '1.3em' }}>
                                    let them choose
                                </Typography>
                                <Box sx={{ border: 'solid', color: '#e7dbdb', display: "block", marginLeft: '10%', marginTop: '35px', marginBottom: '10px', paddingRight: '10%', width: '10px', textAlign: 'left' }}>

                                </Box>

                                <Box>
                                    <Typography variant="h5" sx={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%', textAlign: 'left', fontWeight: '300px', fontSize: '16px', lineHeight: '1.5em' }}>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    </Typography>
                                </Box>

                                <Box sx={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '28px' }}>
                                    {/* This should be linked to the single product gift card page */}
                                    <Link to="/women" style={{ textDecoration: 'none' }}>
                                        <Paper className="motherButton" sx={{ width: '350px', padding: 2, fontSize: 14 }} elevation={0} >FIND THE PERFECT GIFT CARD</Paper>
                                    </Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className='giftCardGiftingImage' square elevation={0} sx={{ height: '500px' }}>

                        </Paper>

                    </Grid>
                </Grid>
            </Box>
        </>




    );
}

export default GiftingSquares;