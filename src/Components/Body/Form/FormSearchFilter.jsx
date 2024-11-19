import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, Grid2 as Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import dayjs from 'dayjs';
import Swal from 'sweetalert2';

import AlertForm from './AlertForm';
import optionsSelect from './optionsSelectForm';

const FormSearchFilter = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  useEffect(() => {
    setSelectedStartDate(selectedStartDate);
    setSelectedEndDate(selectedEndDate);
  }, [selectedStartDate, selectedEndDate]);
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    getValues,
    control,
  } = useForm();

  const validateSelect = () => {
    const { number, text, startDate, endDate, type } = getValues();
    if (type && !number && !text && !startDate && !endDate) {
      return false;
    }
    return true;
  };
  const validateDate = () => {
    const { startDate, endDate } = getValues();
    if ((startDate && !endDate) || (!startDate && endDate)) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'error',
        title:
          'Para buscar por fecha debes completar ambos campos "fecha desde/hasta"',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (data) => {
    if (!validateDate(data.startDate)) {
      return false;
    }
    return true;
  };
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
            // onChange={handleInputChange}
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
          <Controller
            name="startDate"
            control={control}
            defaultValue={null}
            render={({ field: { onChange: onChangeRHF, value } }) => (
              <DatePicker
                sx={{ width: '100%' }}
                label="Fecha desde"
                value={value ? dayjs(value) : null}
                onChange={(newValue) => {
                  const formattedDate = newValue
                    ? newValue.format('YYYY-MM-DD')
                    : null;
                  onChangeRHF(formattedDate);
                  setSelectedStartDate('startDate', formattedDate);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.endDate}
                    helperText={errors.endDate ? errors.endDate.message : ''}
                    fullWidth
                    {...register('startDate', {
                      validate: {
                        l: () => validateDate() || 'Cmpleta el otro',
                      },
                    })}
                    {...(errors.type && {
                      error: true,
                    })}
                  />
                )}
                maxDate={dayjs()}
              />
            )}
          />
          {errors.startDate && <AlertForm message={errors.text.message} />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Controller
            name="endDate"
            control={control}
            defaultValue={null}
            render={({ field: { onChange: onChangeRHF, value } }) => (
              <DatePicker
                sx={{ width: '100%' }}
                label="Fecha hasta"
                value={value ? dayjs(value) : null}
                onChange={(newValue) => {
                  const formattedDate = newValue
                    ? newValue.format('YYYY-MM-DD')
                    : null;
                  onChangeRHF(formattedDate);
                  setSelectedEndDate('endDate', formattedDate);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.endDate}
                    helperText={errors.endDate ? errors.endDate.message : ''}
                    fullWidth
                    {...register('endDate', {
                      validate: {
                        l: () => validateDate() || 'Completa el otro',
                      },
                    })}
                    {...(errors.type && {
                      error: true,
                    })}
                  />
                )}
                maxDate={dayjs()}
              />
            )}
          />
          {errors.endDate && <AlertForm message={errors.text.message} />}
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
