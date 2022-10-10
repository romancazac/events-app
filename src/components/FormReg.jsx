import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Btn from './ui/Btn';
const FormReg = () => {

   const handleForm = (e) => {
     e.preventDefault();
      console.log(e.target[2].value)
   } 
   return (

      
         <Box className='form' component='form' onSubmit={handleForm}>
            <TextField
               className='form__inp'
               required
               label="name"
               type="text"
               variant="filled"

            />
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
         
            <Btn className='form__btn' type='submit'>Registration</Btn>
         </Box>
      
   )
}

export default FormReg