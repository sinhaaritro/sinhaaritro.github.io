export const concatObjectValues = (object: {}, concater: string = "") => {
    return Object.values(object).join(concater);
};
