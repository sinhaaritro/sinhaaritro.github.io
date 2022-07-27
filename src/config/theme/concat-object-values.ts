const concatObjectValues = (object: {}, concater: string = " ") =>
  Object.values(object).join(concater);

export default concatObjectValues;
