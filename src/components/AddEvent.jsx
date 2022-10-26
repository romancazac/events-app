import React from 'react'

import { AppContext } from '../App';


import { Add } from '@mui/icons-material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputAdornment from '@mui/material/InputAdornment';
import RoomIcon from '@mui/icons-material/Room';
import Modals from './Modal';
import Btn from './ui/Btn';
import { Box } from '@mui/system';
import uuid from 'react-uuid';
import { addDoc, collection} from "firebase/firestore";

import { auth, db } from '../firebase';

const AddEvent = () => {
   const { getDb } = React.useContext(AppContext);
 

   console.log(db)
   const [title, setTitle] = React.useState('');
   const [descr, setDescr] = React.useState('');
   const [date, setDate] = React.useState(dayjs('2022-04-07'));
   const [hora, setHora] = React.useState(dayjs('2022-04-07'));
   const [img, setImg] = React.useState('');
   const [location, setLocation] = React.useState('');
   const handleForm = (e) => {
      e.preventDefault();

      const events = collection(db, "events")
      addDoc(events, {

         id: uuid(),
         title,
         descr,
         hora: hora.$H + ':' + hora.$m,
         date: date.$D + '/' + date.$W + '/' + date.$y,
         location,
         img: img
      })
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            console.log(err)
         })

         getDb();  

   }

   return (


      <Modals
         btn={
            <Btn><Add />rolê</Btn>}>
         <Box className='form' component='form' onSubmit={handleForm}>
            <TextField
               className='form__inp'
               required
               label="título"
               type="text"
               variant="filled"
               placeholder='Vamos pra balada? pro barzinho? fazer alguma coisa…'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
               className='form__inp'
               required
               label="descrição (opcional)"
               type="text"
               variant="filled"
               placeholder='descreva o seu hangout…'
               value={descr}
               onChange={(e) => setDescr(e.target.value)}
            />
            <div className="form__row">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                     <DesktopDatePicker
                        className='form__inp'
                        label="Data"
                        views={['day', 'year', 'month']}
                        value={date}

                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                           setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </Stack>
                  <Stack spacing={3}>
                     <DesktopTimePicker
                        label="Hora"
                        className='form__inp'
                        value={hora}
                        onChange={(newValue) => {
                           setHora(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </Stack>

               </LocalizationProvider>

            </div>

            <TextField
               className='form__inp'
               required
               label="endereço"
               type="text"
               variant="filled"
               placeholder='endereço…'
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               InputProps={{
                  startAdornment: (
                     <InputAdornment className='form__inp-icon' position="start" sx={{ order: 2 }}>
                        <RoomIcon />
                     </InputAdornment>
                  ),
               }}
            />
            <TextField
               className='form__inp'
               required
               label="endereço"
               type="file"
               variant="filled"
               placeholder='endereço…'
               value={img}
               onChange={(e) => setImg(e.target.files)}
               InputProps={{
                  startAdornment: (
                     <InputAdornment className='form__inp-icon' position="start" sx={{ order: 2 }}>
                        <RoomIcon />
                     </InputAdornment>
                  ),
               }}
            />
            <Btn className='form__btn' type='submit'>Create</Btn>
         </Box>


      </Modals>

   )
}

export default AddEvent