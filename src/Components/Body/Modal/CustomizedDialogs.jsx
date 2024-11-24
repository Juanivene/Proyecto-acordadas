import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { fetchAgreement } from '../../../app/agreementSlice';
import { closeModal } from '../../../app/modalSlice';

import Loader from '../../ui/Loader';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const StaticModal = () => {
  const [open, setOpen] = useState(true); // El modal estará abierto por defecto

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(window.location.search);
  const idAgreement = params.get('acordada');

  useEffect(() => {
    dispatch(fetchAgreement(idAgreement));
  }, [idAgreement, dispatch]);
  const { dataNow, isLoading, error } = useSelector(
    (state) => state.getAgreementSelected
  );

  const handleClose = () => {
    setOpen(false); // Para cerrar el modal si es necesario
    dispatch(closeModal());
    navigate(`${location.pathname}`, { replace: true });
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center', fontWeight: 'bold' }}>
        Acordada/Resolución seleccionada
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {dataNow ? (
        <DialogContent dividers>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              backgroundColor: 'rgb(229, 246, 253)',
              padding: '10px',
              borderRadius: '8px',
              color: ' rgb(1, 67, 97);',
            }}
          >
            <strong>
              Número: {dataNow.data.agreement_number}/
              {dataNow.data.agreement_year}
            </strong>

            <br />
            <strong>Fecha: {dataNow.data.agreement_date}</strong>
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            {dataNow.data.type_agreement.description}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>{dataNow.data.agreement_description}</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>CONSIDERANDO</b>: {dataNow.data.agreement_text}
          </Typography>
        </DialogContent>
      ) : (
        <Loader />
      )}
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
          IMPRIMIR
        </Button>
        <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
          COMPARTIR
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default StaticModal;
