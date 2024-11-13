import { Box, Stack, Typography } from '@mui/material';

const Header = () => (
  <Stack
    direction="row"
    spacing={2}
    sx={{ justifyContent: 'center', alignItems: 'center' }}
  >
    <Box
      component="img"
      src="https://acordadas.justucuman.gov.ar/img/logos/logo-corte.png"
      alt="imgCSDJ"
      sx={{ height: 72 }}
    />
    <Typography>Acordadas y Resoluciones</Typography>
  </Stack>
);

export default Header;
