import { Alert, Grid2 as Grid } from '@mui/material';

const Alerts = () => (
  <Grid container direction="column" spacing={2}>
    <Grid size={{ xs: 12 }}>
      <Alert severity="info" sx={{ borderRadius: 3, fontSize: 18 }}>
        Bienvenido a la consulta de resoluciones y acordadas. Para buscar, por
        favor ingrese datos en, al menos, un filtro de búsqueda arriba de este
        mensaje. Paso siguiente, dé click al botón BUSCAR.
      </Alert>
    </Grid>
    <Grid size={{ xs: 12 }}>
      <Alert severity="info" sx={{ borderRadius: 3, fontSize: 18 }}>
        Para realizar búsquedas por texto, tiene dos opciones:
        <br /> 1. Utiliza comillas (&quot; &quot;) para buscar una coincidencia
        exacta de una cadena literal.
        <br /> 2. Escriba palabras por separado (sin comillas) para buscar todas
        esas palabras en cualquier orden.
      </Alert>
    </Grid>
  </Grid>
);
export default Alerts;
