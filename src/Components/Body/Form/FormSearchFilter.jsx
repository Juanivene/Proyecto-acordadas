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
    getValues,
  } = useForm();
  const validateSelect = () => {
    const { number, text, startDate, endDate, type } = getValues();

    if (type && !number && !text && !startDate && !endDate) {
      return false;
    }
    return true;
  };

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
                value: 2,
                message: 'El campo debe contener al menos 2 numeros',
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
            {...(errors.number && {
              error: true,
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
              inputLabel: { shrink: true },
            }}
            fullWidth
            {...register('startDate', {})}
            {...(errors.startDate && {
              error: true,
            })}
          />
          {/* <DatePicker /> */}
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
            {...(errors.endDate && {
              error: true,
            })}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField
            id="outlined-basic"
            label="Texto"
            variant="outlined"
            fullWidth
            ref={Text}
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
            {...(errors.text && {
              error: true,
            })}
          />
          {errors.text && <AlertForm message={errors.text.message} />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Autocomplete
            disablePortal
            options={optionsSelect}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipos"
                {...register('type', {
                  validate: {
                    luhn: () =>
                      validateSelect() ||
                      'Para buscar por tipo, debe ingresar también otro campo',
                  },
                })}
                {...(errors.type && {
                  error: true,
                })}
              />
            )}
          />
          {errors.type && <AlertForm message={errors.type.message} />}
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
