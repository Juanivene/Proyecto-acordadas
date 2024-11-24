import { Alert } from '@mui/material';

const AlertError = () => (
  <Alert severity="warning" sx={{ borderRadius: 3, fontSize: 18 }}>
    No se encontraron resultados con los datos ingresados. Por favor, intente de
    nuevo con otros valores.
  </Alert>
);
export default AlertError;
