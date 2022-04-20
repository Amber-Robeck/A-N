import { Grid, Box, Paper, Container } from "@mui/material";

const HomeCards = () => {
    return ( <Box>
        <Container>
        <Grid
        container rowSpacing={4}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={1}
        >
            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper elevation={1} sx={{height: '425px', width: '350px'}}>
            </Paper>
            </Grid>


        </Grid>
        </Container>
    </Box> );
}
 
export default HomeCards;