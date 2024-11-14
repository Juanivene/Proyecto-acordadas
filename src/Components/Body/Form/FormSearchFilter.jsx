import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid2 as Grid, TextField } from '@mui/material';

const FormSearchFilter = () => (
  <form>
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Número"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Fecha desde"
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Fecha hasta"
          variant="outlined"
          type="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <TextField
          id="outlined-basic"
          label="Texto"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Tipos"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
        <Button
          variant="contained"
          disabled
          size="large"
          sx={{
            m: 1,
            borderRadius: 8,
            padding: {
              xs: '16px 36px',
              sm: '16px 48px',
              md: '20px 96px',
            },
            fontSize: {
              xs: '0.75rem',
              sm: '0.875rem',
              md: '1rem',
            },
          }}
          startIcon={<DeleteIcon />}
        >
          Limpiar
        </Button>
      </Grid>
      <Grid size={{ xs: 6 }} display="flex" justifyContent="center">
        <Button
          variant="contained"
          disabled
          size="large"
          sx={{
            m: 1,
            borderRadius: 8,
            padding: {
              xs: '16px 36px',
              sm: '16px 48px',
              md: '20px 96px',
            },
            fontSize: {
              xs: '0.75rem',
              sm: '0.875rem',
              md: '1rem',
            },
          }}
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </Grid>
    </Grid>
  </form>
);
export default FormSearchFilter;
