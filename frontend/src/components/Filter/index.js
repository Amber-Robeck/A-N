import { Box, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import "./filter.css";

const Filter = () => {
    return ( <Box className="collectionFilter" margin={1.5}>
    <Typography className="collectionHeading">
        filters
    </Typography>
    <hr></hr>
    <Typography className="filterTitle">
        size:
    </Typography>
    <Box className="sizeSelector">
    <FormGroup>
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="6.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="7 - 7.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="8" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="8.5 - 9" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="9.5 - 10" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="10.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="12" />
        <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="12.5 - 13" />
        <FormControlLabel control={<Checkbox sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="13.5" />
      </FormGroup>
      
    </Box>

</Box> );
}
 
export default Filter;
