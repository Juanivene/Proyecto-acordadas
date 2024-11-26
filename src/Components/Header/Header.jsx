import { Box, Grid2 as Grid, Typography } from '@mui/material';

const Header = () => (
  <Grid
    container
    direction="row"
    rowSpacing={2}
    sx={{ justifyContent: 'center', alignItems: 'center' }}
  >
    <Grid size={{ sm: 12, md: 6 }} display="flex" justifyContent="center">
      <Box
        component="img"
        src="https://acordadas.justucuman.gov.ar/img/logos/logo-corte.png"
        alt="imgCSDJ"
        sx={{ height: 72 }}
      />
    </Grid>
    <Grid size={{ sm: 12, md: 6 }} display="flex" justifyContent="center">
      <Typography variant="h1" sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
        Acordadas y Resoluciones
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
