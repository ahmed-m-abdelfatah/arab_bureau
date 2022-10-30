const validation = (obj, schema) => {
  const validationErrors = [];

  const validationResult = schema.validate(obj, { abortEarly: false });

  if (validationResult?.error?.details) {
    validationResult.error.details.forEach(detail => {
      const msg = detail.message.replace(/\"/g, '');

      validationErrors.push({
        msg: msg.charAt(0).toUpperCase() + msg.slice(1),
        type: detail.type,
      });
    });
  }

  // console.log('validationErrors', validationErrors);
  return validationErrors;
};

export default validation;
