import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'

// const minDate = new Date('2020-01-01T00:00:00.000');
// const maxDate = new Date('2034-01-01T00:00:00.000');

export default function SubComponentsPickers() {
  const navigate = useNavigate()

  const [date, setDate] = React.useState(new Date());
  const handleBooking = () => {
    navigate('/booking/eyelash+extension')
  }

  return (
    <div>
      <div className="justify-content-center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid item xs={12} md={6}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </Grid>
    </LocalizationProvider>
        <div className='justify-content-end' style={{ display: 'flex' }}>
            <button onClick={handleBooking} className='login-btn mt-4 fw-bold'>Book</button>
        </div>
      </div>
    </div>
  );
}
