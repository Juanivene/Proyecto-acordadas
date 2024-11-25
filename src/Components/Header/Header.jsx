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
        src="public/assets/img/logos/logo-corte-2019.png"
        alt="imgCSDJ"
        sx={{ height: 72 }}
      />
    </Grid>
    <Grid size={{ sm: 12, md: 6 }} display="flex" justifyContent="center">
      <Typography variant="h1" sx={{ fontSize: '1.8rem' }}>
        Acordadas y Resoluciones
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
