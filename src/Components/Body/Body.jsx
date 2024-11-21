import { Container, Grid2 as Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Alerts from './Alerts';
import FormSearchFilter from './Form/FormSearchFilter';
import TableAgreements from './Table/TableAgreements';

const Body = () => (
  <Container>
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
      <Grid size={{ xs: 12 }}>
        <TableAgreements />
      </Grid>
    </Grid>
  </Container>
);
export default Body;
