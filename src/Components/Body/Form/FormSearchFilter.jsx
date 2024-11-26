import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, Grid2 as Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import {
  fetchApi,
  incrementIndex,
  resetDataNow,
  resetError,
  setAgreementsFilters,
} from '../../../app/slice';

import dayjs from 'dayjs';

import AlertForm, { Toast } from './AlertForm';
import optionsSelect from './optionsSelectForm';

const FormSearchFilter = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    getValues,
    watch,
    control,
    reset,
  } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { index } = useSelector((state) => state.getAgreementsFilters);

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
      Toast.fire({
        icon: 'error',
        title:
          'Para buscar por fecha debes completar ambos campos "fecha desde/hasta"',
      });
      return false;
    }
    if (startDate) {
      const startDateFormated = dayjs(startDate);
      const endDateFormated = dayjs(endDate);

      if (!endDateFormated.isAfter(startDateFormated)) {
        Toast.fire({
          icon: 'error',
          title: 'Intervalo de fecha invalido',
        });
        return false;
      }
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
    if (!validateDate() || !validateFields()) {
      return false;
    }
    if (data.startDate) {
      data.startDate = dayjs(data.startDate).format('YYYY-MM-DD');
      data.endDate = dayjs(data.endDate).format('YYYY-MM-DD');
    }
    dispatch(incrementIndex());
    dispatch(fetchApi({ filters: data, index }));
    dispatch(setAgreementsFilters(data));
    return true;
  };

  const cleanFilter = () => {
    reset();
    dispatch(resetDataNow());
    dispatch(resetError());
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
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
                backgroundColor: 'rgb(262, 262, 262)',
              },
            }}
          />
          {errors.number && <AlertForm message={errors.number.message} />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgb(262, 262, 262)',
                    borderRadius: '16px',
                  },
                }}
                {...field}
                label="Fecha Desde"
                format="DD/MM/YYYY"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!errors.startDate}
                    helperText={errors.startDate?.message}
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgb(262, 262, 262)',
                    borderRadius: '16px',
                  },
                }}
                {...field}
                label="Fecha Hasta"
                format="DD/MM/YYYY"
                maxDate={dayjs()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!errors.endDate}
                    helperText={errors.endDate?.message}
                  />
                )}
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
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgb(262, 262, 262)',
                borderRadius: '16px',
              },
            }}
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgb(262, 262, 262)',
                    borderRadius: '16px',
                  },
                }}
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
        <Grid size={{ xs: 12 }}>
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
                  backgroundColor: 'rgb(158, 158, 158);',
                  m: 1,
                  borderRadius: 8,
                  padding: {
                    xs: '15px 36px',
                    sm: '15px 48px',
                    md: '14px 96px',
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
                  backgroundColor: 'rgb(63, 117, 168)',
                  m: 1,
                  borderRadius: 8,
                  padding: {
                    xs: '16px 36px',
                    sm: '16px 48px',
                    md: '15px 96px',
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
        </Grid>
      </Grid>
    </form>
  );
};
export default FormSearchFilter;
