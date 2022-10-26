import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import Btn from './ui/Btn';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const FormReg = () => {
   const navigate = useNavigate()
   const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

   const handleForm = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/dashbord");
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
   };

   
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
         <IconButton color="primary" component="label">

            <input type="file" accept="image/*" hidden />
            <AttachFile fontSize="medium" />
            Upload Avatar
         </IconButton>
         {/* {err && <span>{err}</span>} */}
         <Btn className='form__btn' type='submit'>Registration</Btn>
      </Box>

   )
}

export default FormReg