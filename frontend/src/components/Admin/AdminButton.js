import React from 'react';
import { Grid, Link, Paper } from '@mui/material';

const AdminButton = ({ buttonText, stateName, clickFunc }) => {
  return (
    <Grid item vertialalign={'baseline'} textAlign={'center'} fontWeight={300}
      marginBottom={'1em'} marginTop={'1em'} marginLeft={'.5rem'} color='#000' letterSpacing={1.2} width={'9rem'}>
      <Link to={"/admin/update/" + stateName._id} onClick={clickFunc} style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Paper sx={{ padding: 2, border: 1, fontSize: 12 }} elevation={0} variant="outlined">{buttonText}</Paper>
      </Link>
    </Grid>
  )
}

export default AdminButton
