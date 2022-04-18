import { Box, Typography, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import "./filter.css";

const Filter = () => {
    return ( <Box className="collectionFilter" margin={1.5}>
    <Typography variant="h6" className="collectionHeading">
        filters
    </Typography>

    <Typography className="filterTitle">
        size:
    </Typography>
    <Box className="sizeSelector">
    <FormGroup>
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="6.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="7 - 7.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="8" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="8.5 - 9" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="9.5 - 10" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="10.5" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="12" />
        <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="12.5 - 13" />
        <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="13.5" />
      </FormGroup>
    </Box>

    <Typography className="filterTitle">
        color:
    </Typography>
    <Box className="colorSelector">
    <FormGroup>
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="red" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="orange" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="yellow" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="green" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="blue" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="indigo" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="violet" />
        <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="black" />
        <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="white" />
      </FormGroup>
    </Box>

</Box> );
}
 
export default Filter;
