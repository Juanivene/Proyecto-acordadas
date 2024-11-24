import { Alert } from '@mui/material';

const AlertError = () => (
  <Alert severity="warning" sx={{ borderRadius: 3, fontSize: 18 }}>
    Ocurrió un error intentando acceder al recurso solicitado. Por favor,
    intente nuevamente en unos instantes
  </Alert>
);
export default AlertError;
