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
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
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
      <Grid size={{ xs: 4 }} display="flex" justifyContent="center">
        <Button
          variant="contained"
          disabled
          size="large"
          sx={{ m: 1, borderRadius: 8, padding: '20px 96px' }}
          startIcon={<DeleteIcon />}
        >
          Limpiar
        </Button>
      </Grid>
      <Grid size={{ xs: 4 }} display="flex" justifyContent="center">
        <Button
          variant="contained"
          disabled
          size="large"
          sx={{ m: 1, borderRadius: 8, padding: '20px 96px' }}
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default FormSearchFilter;
