import { useSelector } from 'react-redux';

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

const TableAgreements = () => {
  const { dataNow } = useSelector((state) => state.getAgreementsFilters);
  const { agreements } = dataNow.data;
  const handleClick = () => {};

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
            <StyledTableRow key={a.id} onClick={handleClick}>
              <StyledTableCell align="left">
                {a.agreement_number}/{a.agreement_year}
              </StyledTableCell>
              <StyledTableCell align="left">{a.agreement_date}</StyledTableCell>
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
    </TableContainer>
  );
};
export default TableAgreements;
