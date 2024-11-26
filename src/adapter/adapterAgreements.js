const agreementsAdapter = (data) => {
  if (!data?.data?.agreements || !Array.isArray(data.data.agreements)) {
    throw new Error('La estructura de datos no es válida');
  }

  const transformedAgreements = data.data.agreements.map((agreement) => ({
    id: agreement.id,
    number: agreement.agreement_number,
    year: agreement.agreement_year,
    date: agreement.agreement_date,
    description: agreement.agreement_description,
    typeDescription: agreement.type_agreement?.description || null,
  }));
  const {
    max_page: totalPages,
    max_size: totalItems,
    ...otherFields
  } = data.data;
  return {
    ...data,
    data: {
      ...otherFields,
      agreements: transformedAgreements,
      totalPages,
      totalItems,
    },
  };
};

export default agreementsAdapter;
