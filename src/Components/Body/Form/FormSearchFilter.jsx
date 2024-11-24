import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, Grid2 as Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import {
  fetchApi,
  resetDataNow,
  setAgreementsFilters,
} from '../../../app/slice';

import dayjs from 'dayjs';
import Swal from 'sweetalert2';

import AlertForm from './AlertForm';
import optionsSelect from './optionsSelectForm';

const FormSearchFilter = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    getValues,
    control,
    watch,
    reset,
  } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const validateSelect = () => {
    const { number, text, startDate, endDate, type } = getValues();
    if (type && !number && !text && !startDate && !endDate) {
      return false;
    }
    return true;
  };

  const validateFields = useCallback(() => {
    const { number, text, startDate, endDate, type } = getValues();
    return !!(type || number || text || startDate || endDate); // Evalúa si al menos uno tiene valor
  }, [getValues]);

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
  useEffect(() => {
    const subscription = watch(() => {
      setIsButtonDisabled(!validateFields());
    });
    return () => subscription.unsubscribe();
  }, [watch, validateFields]);

  const handleSubmit = (data) => {
    if (!validateDate(data.startDate) || !validateFields()) {
      return false;
    }
    dispatch(fetchApi({ filters: data, index: 0 }));
    dispatch(setAgreementsFilters(data));
    return true;
  };

  const cleanFilter = () => {
    reset();
    dispatch(resetDataNow());
    setIsButtonDisabled(true);
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
            maxLength={23}
            {...register('number', {
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
            onClick={cleanFilter}
            variant="contained"
            disabled={isButtonDisabled}
            size="large"
            sx={{
              backgroundColor: 'gray',
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
            disabled={isButtonDisabled}
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
