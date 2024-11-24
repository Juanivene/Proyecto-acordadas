import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Loader = () => (
  <Backdrop
    sx={{
      color: '#fff',
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backdropFilter: 'blur(8px)', // Difumina el fondo
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparente pero oscurece un poco
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
    open
  >
    <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
      <HourglassBottomIcon sx={{ fontSize: 60, color: '#2196f3' }} />
      <CircularProgress color="primary" />
    </Box>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
      Cargando, por favor espera...
    </Typography>
  </Backdrop>
);

export default Loader;
