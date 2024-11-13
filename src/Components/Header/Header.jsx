import { Box, Grid2 as Grid, Typography } from '@mui/material';

const Header = () => (
  <Grid
    container
    direction="row"
    rowSpacing={2}
    sx={{ justifyContent: 'center', alignItems: 'center' }}
  >
    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
      <Box
        component="img"
        src="https://acordadas.justucuman.gov.ar/img/logos/logo-corte.png"
        alt="imgCSDJ"
        sx={{ height: 72 }}
      />
    </Grid>
    <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
      <Typography variant="h1" sx={{ fontSize: '2rem' }}>
        Acordadas y Resoluciones
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
