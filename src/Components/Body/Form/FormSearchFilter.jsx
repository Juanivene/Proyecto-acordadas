import { useForm } from 'react-hook-form';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, Grid2 as Grid, TextField } from '@mui/material';

import AlertForm from './AlertForm';
import optionsSelect from './optionsSelectForm';

const FormSearchFilter = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {};
  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
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
            {...register('number', {
              minLength: {
                value: 1,
                message: 'El campo debe contener al menos 1 numero',
              },
              maxLength: {
                value: 23,
                message: 'El numero no debe superar los 23 caracteres',
              },
              pattern: {
                value: /^\d+$/,
                message: 'Ingrese un  numero valido',
              },
            })}
          />
          {errors.number && <AlertForm message={errors.number.message} />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            id="outlined-basic"
            label="Fecha desde"
            variant="outlined"
            type="date"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth
            {...register('startDate', {})}
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
            {...register('endDate', {})}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField
            id="outlined-basic"
            label="Texto"
            variant="outlined"
            fullWidth
            {...register('text', {
              minLength: {
                value: 3,
                message: 'El texto debe tener entre 3 y 250 caracteres',
              },
              maxLength: {
                value: 250,
                message: 'El texto debe tener entre 3 y 250 caracteres',
              },
            })}
          />
          {errors.text && <AlertForm message={errors.text.message} />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Autocomplete
            disablePortal
            options={optionsSelect}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Tipos" />}
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
            type="submit"
            variant="contained"
            // disabled
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
};
export default FormSearchFilter;
