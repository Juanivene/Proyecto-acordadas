export const getAgreementsFn = async (filters, i) => {
  const { text, number, startDate, endDate } = filters;
  let { type } = filters;
  if (type === 'ACORDADAS') {
    type = 'A';
  }
  if (type === 'RESOLUCIONES') {
    type = 'R';
  }
  if (type === 'RESOLUCION DE FERIA') {
    type = 'RF';
  }
  const params = new URLSearchParams({ size: 10, index: i });
  if (text) params.append('text', `contains>${text}`);
  if (number) params.append('number', `equals>${number}`);
  if (type) params.append('type', `equals>${type}`);
  if (startDate && endDate) {
    params.append('init-date', `greaterOrEquals>${startDate}`);
    params.append('final-day', `lessOrEquals>${endDate}`);
  }

  const res = await fetch(
    `https://apiconsultaacordadas-desa.justucuman.gov.ar/agreements?${params}`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('ocurrio un problma al obtener los datos bro');
  }
  return data;
};
export default getAgreementsFn;

// todo te conviene mover la funcion a un slice donde se
// todo ejecute la funcion para que dinamicamente se mueva
// todo el index cuando se presione el boton de siguiente
// que le mande el index como 0 por defecto y cada vez que
// presione el boton se sume 1