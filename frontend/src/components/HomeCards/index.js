import { Grid, Box, Paper, Container } from "@mui/material";

import "./homeCards.css";


const HomeCards = () => {
            return (
                <Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid
        container spacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3}}
        columns={{ xs: 1, sm: 8, md: 12 }}
        // direction="row"
        // justifyContent="space-evenly"
        // alignItems="center"
        // marginTop={1}
        >
            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the flame</span>
                    <span>reds, oranges, and yellows</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the aqua</span>
                    <span>blues, greens, and teals</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the impression</span>
                    <span>purples, blacks, and whites</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the floral</span>
                    <span>bright hues and tints</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the minimal</span>
                    <span>patterns and designs</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper className="transition"  elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
              
            <Box className="transition">
            <img className="homeCardImage" src={`${process.env.PUBLIC_URL}/assets/images/ehimetalor-akhere-unuabona-Bd_I3IctjfQ-unsplash.jpg`} alt="stylish man sitting on wall"/>
            </Box>

            <Box className="lowerBox">
                <Paper
                className="cardText" sx={{ margin: 2, marginLeft: 2.2, marginTop: 2.5, marginBotton: 2.2, padding: 2, border: 1, fontSize: 18 }} elevation={0} variant="outlined" square>
                   <span className="cardTitle">the casual</span>
                    <span>cool, sleek, and fashionable</span>

                </Paper>
            </Box>
                
            </Paper>
            </Grid>

            {/* <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={0} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid> */}


        </Grid>
    </Box>
        </Container>
     );
}
 
export default HomeCards;