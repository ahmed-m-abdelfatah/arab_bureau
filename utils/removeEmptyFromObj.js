const removeEmptyFromObj = obj => {
  let newObj = {};

  Object.keys(obj).forEach(k => {
    // check if length > 0 when it is string
    if (
      typeof obj[k] === 'string' &&
      obj[k].trim().length > 0 &&
      obj[k].toLowerCase() !== 'null' &&
      obj[k].toLowerCase() !== 'undefined'
    ) {
      newObj[k] = obj[k];
    }

    // check if length of first element of array > 0
    if (typeof obj[k] === 'object' && obj[k].hasOwnProperty('length')) {
      if (
        typeof obj[k][0] === 'string' &&
        obj[k][0].trim().length > 0 &&
        obj[k][0].toLowerCase() !== 'null' &&
        obj[k][0].toLowerCase() !== 'undefined'
      ) {
        newObj[k] = obj[k];
      }
    }
  });

  return newObj;
};

export default removeEmptyFromObj;
