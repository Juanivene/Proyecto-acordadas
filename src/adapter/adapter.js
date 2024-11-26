export const agreementsAdapter = (data) => {
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
export const agreementAdapter = (data) => {
  if (!data?.data) {
    throw new Error('La estructura de datos no es válida');
  }

  const {
    agreement_date: date,
    agreement_description: description,
    agreement_number: number,
    agreement_text: text,
    agreement_year: year,
    attach_list: attachments,
    file_number: fileNumber,
    id,
    record_list: records,
    signature_list: signatures,
    type_agreement: { code: typeCode, description: typeDescription } = {},
    ...otherFields
  } = data.data;

  return {
    ...data,
    data: {
      id,
      number,
      year,
      date,
      description,
      text,
      fileNumber,
      attachments,
      records,
      signatures,
      typeCode,
      typeDescription,
      ...otherFields,
    },
  };
};
