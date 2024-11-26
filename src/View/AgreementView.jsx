import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Body from '../Components/Body/Body';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const AgreementView = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '99vh',
    }}
  >
    <Header />
    <Box sx={{ flexGrow: 1 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Body />
      </LocalizationProvider>
    </Box>
    <Footer />
  </Box>
);

export default AgreementView;
