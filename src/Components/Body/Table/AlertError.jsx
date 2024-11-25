import { useDispatch } from 'react-redux';

import { Alert } from '@mui/material';

import { resetDataNow } from '../../../app/slice';

const AlertError = () => {
  const dispatch = useDispatch();
  dispatch(resetDataNow());
  return (
    <Alert severity="warning" sx={{ borderRadius: 3, fontSize: 18 }}>
      Ocurrio un error al intentar acceder a los datos, por favor intente de
      nuevo en unos instantes
    </Alert>
  );
};
export default AlertError;
