import React from 'react'

import { FilterList } from '@mui/icons-material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modals from '../Modal';
import Btn from '../ui/Btn';
import './sort.scss'

const Sort = () => {

   const [value, setValue] = React.useState(dayjs('2022-04-07'));

   const date = [value.$d.getDay(), value.$y ]
   const onFilter = () =>{
     
   }
   // console.log(date)
   return (
      <div className='sort'>
         <Modals
            btn={
               <Btn className={'sort__btn'}><FilterList /></Btn>}>
            <div className="sort__top">
               <FilterList />
               Filtrar
            </div>
            <form className="sort__Form">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                     <DesktopDatePicker
                        label="For desktop"
                        views={['day', 'year', 'month']}
                        value={value}
                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                           setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                     />
                  </Stack>
               </LocalizationProvider>
            </form>
         </Modals>
      </div>
   )
}

export default Sort