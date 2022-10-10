import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
const FormSing = () => {
   return (

      
         <Box className='form' component='form'>
            <TextField
               className='form__inp'
               required
               id="filled-password-input"
               label="e-mail"
               type="email"
               variant="filled"

            />
            <TextField
               className='form__inp'
               required
               id="outlined-number"
               label="password"
               type="password"
               variant="filled"
            />
          <button className='form__btn' type="submit">Sing in</button>
            
         </Box>
      
   )
}

export default FormSing