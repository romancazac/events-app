import React from 'react'
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


const AddEvent = () => {
   const [value, setValue] = React.useState(dayjs('2022-04-07'));
   const [location, setLocation] = React.useState();
   const handleForm = (e) => {
      e.preventDefault();
      console.log(e.target[4].value)
   }
   console.log(location)
  
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
            />
            <TextField
               className='form__inp'
               required
               label="descrição (opcional)"
               type="text"
               variant="filled"
               placeholder='descreva o seu hangout…'
            />
            <div className="form__row">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                     <DesktopDatePicker
                        label="Data"
                        views={['day', 'year', 'month']}
                        value={value}
                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                           setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </Stack>
                  <DesktopTimePicker
                     label="For desktop"
                     value={value}
                     onChange={(newValue) => {
                        setValue(newValue);
                     }}
                     renderInput={(params) => <TextField {...params} />}
                  />
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
                     <InputAdornment position="start" sx={{ alignItems: 'flex-end' }}>
                        <RoomIcon />
                     </InputAdornment>
                  ),
               }}
            />
            <Btn className='form__btn' type='submit'>Registration</Btn>
         </Box>


      </Modals>

   )
}

export default AddEvent