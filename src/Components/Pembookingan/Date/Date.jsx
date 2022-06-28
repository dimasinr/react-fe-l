import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';

const minDate = Date.now();
const maxDate = new Date(Date.now() + 12096e5);

export default function SubComponentsPickers() {

  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <div className="justify-content-center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid item xs={12} md={6}>
          <CalendarPicker 
          date={date} 
          minDate={minDate} 
          maxDate={maxDate} 
          onChange={(newDate) => setDate(newDate)} 
          />
        </Grid>
    </LocalizationProvider>       
      </div>
    </div>
  );
}
