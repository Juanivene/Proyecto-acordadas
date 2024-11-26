import agreementsAdapter from '../adapter/adapterAgreements';

const apiAgreements = import.meta.env.VITE_API_AGREEMENTS;
const apiAgreement = import.meta.env.VITE_API_AGREEMENT;
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

  const res = await fetch(`${apiAgreements}${params}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error('ocurrio un problma al obtener los datos bro');
  }
  agreementsAdapter(data);

  return data;
};

export const getAgreementFn = async (id) => {
  const res = await fetch(`${apiAgreement}${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error('ocurrio un problma al obtener los datos bro');
  }
  return data;
};
