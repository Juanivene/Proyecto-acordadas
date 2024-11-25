import { useDispatch } from 'react-redux';

import { Alert } from '@mui/material';

import { resetDataNow } from '../../../app/slice';

const AlertError = () => {
  const dispatch = useDispatch();
  dispatch(resetDataNow());
  return (
    <Alert severity="warning" sx={{ borderRadius: 3, fontSize: 18 }}>
      No se encontraron resultados con los datos ingresados. Por favor, intente
      de nuevo con otros valores.
    </Alert>
  );
};
export default AlertError;
