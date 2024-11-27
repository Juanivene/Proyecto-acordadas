import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const handleClick = (id) => {
    setSearchParams({ acordada: id });
    dispatch(openModal());
  };

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
    <TableContainer component={Paper} sx={{ borderRadius: '20px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell
              align="center" // Centra el título
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#6c757d',
              }}
            >
              Número
            </StyledTableCell>
            <StyledTableCell
              align="center" // Centra el título
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#6c757d',
              }}
            >
              Fecha
            </StyledTableCell>
            <StyledTableCell
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#6c757d',
              }}
            >
              Descripción
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#6c757d',
              }}
            >
              Tipo
            </StyledTableCell>
            <StyledTableCell
              align="center" // Centra el título
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
          {dataNow.data.agreements.map((a) => (
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
              <StyledTableCell align="center">
                {a.number}/{a.year}
              </StyledTableCell>
              <StyledTableCell align="center">
                {dayjs(a.date).format('DD/MM/YYYY')}
              </StyledTableCell>
              <StyledTableCell>{a.description}</StyledTableCell>
              <StyledTableCell align="center">
                {a.typeDescription}
              </StyledTableCell>
              <StyledTableCell align="center">
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
  );
};
export default TableAgreements;
