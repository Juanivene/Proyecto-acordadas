import { Alert } from '@mui/material';

const AlertError = () => (
  <Alert severity="warning" sx={{ borderRadius: 3, fontSize: 18 }}>
    Ocurrio un error al intentar acceder a los datos, por favor intente de nuevo
    en unos instantes
  </Alert>
);

export default AlertError;
