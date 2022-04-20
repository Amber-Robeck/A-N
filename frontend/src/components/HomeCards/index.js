import { Grid, Box, Paper, Container } from "@mui/material";

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
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>

            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px', background: '#f8f8f8'}}>
            </Paper>
            </Grid>


        </Grid>
    </Box>
        </Container>
     );
}
 
export default HomeCards;