import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Poppins", sans-serif', // Puedes elegir cualquier fuente redondeada
      fontSize: '1.2rem', // Aumentar el tamaño de la letra
      textAlign: 'center',
      padding: 2,
      color: '#333',
    }}
  >
    <Typography variant="body1" sx={{ mb: 1 }}>
      © 2024 - Poder Judicial de Tucumán - Dirección de Sistemas
    </Typography>
    <Typography variant="body2">v1.0.3</Typography>
  </Box>
);

export default Footer;
