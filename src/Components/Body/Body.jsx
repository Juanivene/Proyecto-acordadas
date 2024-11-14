import { Grid2 as Grid } from '@mui/material';

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
      <FormSearchFilter />
    </Grid>
    <Grid size={{ xs: 12 }}>
      <Alerts />
    </Grid>
  </Grid>
);
export default Body;
