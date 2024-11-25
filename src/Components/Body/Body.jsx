import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Container, Grid2 as Grid, Grid2 } from '@mui/material';

import { decrementIndex, fetchApi, incrementIndex } from '../../app/slice';

import Loader from '../ui/Loader';
import Alerts from './Alerts';
import FormSearchFilter from './Form/FormSearchFilter';
import AlertError from './Table/AlertError';
import AlertNoAgreements from './Table/AlertNoAgreements';
import CardTable from './Table/CardTable';
import TableAgreements from './Table/TableAgreements';

const Body = () => {
  const { dataNow, isLoading, error, index, agreementsFilters } = useSelector(
    (state) => state.getAgreementsFilters
  );
  const dispatch = useDispatch();

  const handleNext = () => {
    if (dataNow.data.max_page === index + 1) {
      return;
    }
    dispatch(incrementIndex());

    dispatch(fetchApi({ filters: agreementsFilters, index }));
  };
  const handleBack = () => {
    if (index === 0) {
      return;
    }
    dispatch(decrementIndex());
    dispatch(fetchApi({ filters: agreementsFilters, index }));
  };

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
          <FormSearchFilter />
        </Grid>
        <Grid size={{ xs: 12 }}>
          {dataNow || error || dataNow.data.agreements.length === 0 ? (
            ''
          ) : (
            <Alerts />
          )}
        </Grid>
        <Grid size={{ xs: 12 }}>
          {isLoading && <Loader />}
          {error ? <AlertError /> : ''}
          {dataNow && dataNow.data.agreements.length === 0 ? (
            <AlertNoAgreements />
          ) : (
            ''
          )}
          {dataNow && dataNow.data.agreements.length > 0 ? (
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
              }}
            >
              <TableAgreements />
            </Box>
          ) : (
            ''
          )}
          {dataNow && dataNow.data.agreements.length > 0
            ? dataNow.data.agreements.map((a) => (
                <Box
                  key={a.id}
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      md: 'none',
                      lg: 'none',
                    },
                    margin: 1,
                  }}
                >
                  <CardTable id={a.id} a={a} />
                </Box>
              ))
            : null}
          {dataNow && dataNow.data.agreements.length > 0 ? (
            <Grid2
              container
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 2,
              }}
            >
              <Grid2 item xs={6}>
                <Button
                  onClick={handleBack}
                  disabled={index === 0}
                  variant="outlined"
                  sx={{
                    height: '40px',
                    color: '#555',
                    borderRadius: '18px',
                    borderColor: '#555',
                    '&:hover': {
                      width: '110px',
                      borderColor: '#655',
                      backgroundColor: '#f8f9fa',
                    },
                  }}
                >
                  Anterior
                </Button>
              </Grid2>
              <Grid2 item xs={6}>
                <Button
                  onClick={handleNext}
                  disabled={dataNow?.data?.max_page === index + 1}
                  variant="outlined"
                  sx={{
                    height: '40px',
                    color: '#555',
                    borderColor: '#655',
                    borderRadius: '18px',
                    '&:hover': {
                      width: '110px',
                      borderColor: '#555',
                      backgroundColor: '#f8f9fa',
                    },
                  }}
                >
                  Siguiente
                </Button>
              </Grid2>
            </Grid2>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Body;
