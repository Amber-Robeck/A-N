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
        }} />} label="xxs" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="xs" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="s" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="m" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="l" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="xl" />
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="xxl" />
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

    <Typography className="filterTitle">
        collection:
    </Typography>
    <Box className="collectionSelector">
    <FormGroup>
  <FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the flame" />

<FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the aqua" />

<FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the impression" />

<FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the floral" />

<FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the minimal" />

<FormControlLabel control={<Checkbox sx={{
          color: '#696869',
          '&.Mui-checked': {
            color: 'blueviolet',
          },
        }} />} label="the casual" />
        </FormGroup>

        
        </Box>

</Box> );
}
 
export default Filter;
