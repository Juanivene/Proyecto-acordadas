import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Visibility } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { openModal } from '../../../app/modalSlice';

import dayjs from 'dayjs';

import CustomizedDialog from '../Modal/CustomizedDialogs';

const TableAgreements = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { dataNow } = useSelector((state) => state.getAgreementsFilters);
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

  return (
    <article>
      <Typography component="h2" variant="h6" sx={{ marginBottom: 2 }}>
        Acordada(s)/Resolucion(es) encontrada(s): <b>{dataNow.data.max_size}</b>
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: '20px' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#6c757d',
                }}
              >
                Número
              </StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#6c757d',
                }}
              >
                Fecha
              </StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#6c757d',
                }}
              >
                Descripción
              </StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#6c757d',
                }}
              >
                Tipo
              </StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  backgroundColor: '#6c757d',
                }}
              >
                Acciones
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agreements.map((a) => (
              <StyledTableRow
                key={a.id}
                onClick={() => handleClick(a.id)}
                sx={{
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgb(206, 204, 204)', // Color al pasar el mouse
                  },
                }}
              >
                <StyledTableCell align="left">
                  {a.agreement_number}/{a.agreement_year}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {dayjs(a.agreement_date).format('DD/MM/YYYY')}
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
    </article>
  );
};
export default TableAgreements;
