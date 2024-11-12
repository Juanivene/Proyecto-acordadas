import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => ({
  // This solves "styled_default is not a function" - see https://github.com/mui/material-ui/issues/32727
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material/Tooltip'],
  },
  plugins: [react()],
}));
