import React from 'react'
import { Grid } from '@mui/material'
import { Facebook, Instagram } from '@mui/icons-material';
const SocialIcon = () => {
   return (
      <Grid container
         className='social__row'
         justifyContent="flex-end"
         columnSpacing='50px'
      >
         <Grid item>
            <Facebook />
         </Grid>
         <Grid item>
            <Instagram />
         </Grid>

      </Grid>
   )
}

export default SocialIcon