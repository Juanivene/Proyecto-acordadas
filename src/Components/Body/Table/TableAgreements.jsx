import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Visibility } from '@mui/icons-material';
import { Button, Grid2, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { openModal } from '../../../app/modalSlice';
import { decrementIndex, fetchApi, incrementIndex } from '../../../app/slice';

import CustomizedDialog from '../Modal/CustomizedDialogs';

const TableAgreements = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { dataNow, agreementsFilters, index } = useSelector(
    (state) => state.getAgreementsFilters
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    const params = new URLSearchParams(window.location.search);
    params.set('acordada', id); // Asigna el valor del parámetro
    navigate(`?${params.toString()}`); // Navega con los nuevos parámetros
    dispatch(openModal());
  };
  const { agreements } = dataNow.data;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handleNext = () => {
    if (dataNow.data.max_page === index + 1) {
      return;
    }
    dispatch(incrementIndex());

    dispatch(fetchApi({ filters: agreementsFilters, index }));
  };
  const handleBack = () => {
    if (index === 0) {
      return;
    }
    dispatch(decrementIndex());
    dispatch(fetchApi({ filters: agreementsFilters, index }));
  };
  return (
    <article>
      <Typography component="h2">
        Acordada(s)/Resolucion(es) encontrada(s): <b>{dataNow.data.max_size}</b>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Número</StyledTableCell>
              <StyledTableCell align="left">Fecha</StyledTableCell>
              <StyledTableCell align="left">Descripción</StyledTableCell>
              <StyledTableCell align="left">Tipo</StyledTableCell>
              <StyledTableCell align="left">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agreements.map((a) => (
              <StyledTableRow key={a.id} onClick={() => handleClick(a.id)}>
                <StyledTableCell align="left">
                  {a.agreement_number}/{a.agreement_year}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {a.agreement_date}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {a.agreement_description}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {a.type_agreement.description}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <IconButton aria-label="eye icon">
                    <Visibility />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {isOpen ? <CustomizedDialog /> : ''}
      </TableContainer>
      <Grid2
        container
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Grid2 size={{ sx: 6 }}>
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{
              margin: 1,
              height: '40px', // Ajusta la altura del botón
              color: '#555555', // Color de texto gris oscuro
              borderColor: '#555555', // Color del borde gris oscuro
              '&:hover': {
                borderColor: '#555555', // Cambia el borde en el hover
                backgroundColor: 'white', // Fondo transparente en hover
              },
            }}
          >
            Anterior
          </Button>
        </Grid2>
        <Grid2 size={{ sx: 6 }}>
          <Button
            onClick={handleNext}
            variant="outlined"
            sx={{
              margin: 1,
              height: '40px', // Ajusta la altura del botón
              color: '#555555', // Color de texto gris oscuro
              borderColor: '#555555', // Color del borde gris oscuro
              '&:hover': {
                borderColor: '#555555', // Cambia el borde en el hover
                backgroundColor: 'white', // Fondo transparente en hover
              },
            }}
          >
            Siguiente
          </Button>
        </Grid2>
      </Grid2>
    </article>
  );
};
export default TableAgreements;
