import { useSelector } from 'react-redux';

import { Container, Grid2 as Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Loader from '../ui/Loader';
import Alerts from './Alerts';
import FormSearchFilter from './Form/FormSearchFilter';
import AlertError from './Table/AlertError';
import TableAgreements from './Table/TableAgreements';

const Body = () => {
  const { dataNow, isLoading, error } = useSelector(
    (state) => state.getAgreementsFilters
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
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
        <Grid size={{ xs: 12 }}>{dataNow ? '' : <Alerts />}</Grid>
        <Grid size={{ xs: 12 }}>
          {(dataNow && dataNow.data.agreements.length === 0) || error ? (
            <AlertError />
          ) : (
            ''
          )}
          {dataNow && dataNow.data.agreements.length > 0 ? (
            <TableAgreements />
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Body;
