import { Grid2 as Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Alerts from './Alerts';
import FormSearchFilter from './Form/FormSearchFilter';

const Body = () => (
  <Grid
    container
    direction="column"
    spacing={2}
    sx={{
      justifyContent: 'center',
      alignItems: 'center',
      mt: 3,
    }}
  >
    <Grid size={{ xs: 12 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormSearchFilter />
      </LocalizationProvider>
    </Grid>
    <Grid size={{ xs: 12 }}>
      <Alerts />
    </Grid>
  </Grid>
);
export default Body;
