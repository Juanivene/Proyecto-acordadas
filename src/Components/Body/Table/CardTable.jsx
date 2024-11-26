import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

import { openModal } from '../../../app/modalSlice';

import dayjs from 'dayjs';
import PropTypes from 'prop-types';

const CardTable = (props) => {
  const { a, id } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('acordada', id); // Asigna el valor del parámetro
    navigate(`?${params.toString()}`); // Navega con los nuevos parámetros
    dispatch(openModal());
  };

  return (
    <Card
      onClick={() => handleClick()}
      sx={{
        maxWidth: '100%',
        borderRadius: 2,
        transition: 'background-color 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          backgroundColor: 'rgb(206, 200, 200)',
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                {a.number}/{a.year}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                }}
              >
                {dayjs(a.date).format('DD/MM/YYYY')}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                mb: 1,
              }}
            >
              {a.typeDescription}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#444',
                fontWeight: 500,
              }}
            >
              {a.description}
            </Typography>{' '}
            <Divider sx={{ width: '100%' }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardTable;
CardTable.propTypes = {
  id: PropTypes.string.isRequired,
  a: PropTypes.isRequired,
};
