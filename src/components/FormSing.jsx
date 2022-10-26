import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const FormSing = () => {

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;

   
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/dashbord')
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
   }

   return (


      <Box className='form' component='form' onSubmit={handleSubmit}>
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