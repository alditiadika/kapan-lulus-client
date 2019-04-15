export const isEmpty = stringData => {
  if (stringData === null || stringData === undefined || stringData === "")
    return true;
  else return false;
};
export const emailValidator = dataInput => {
  let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (reg.test(dataInput)) return true;
  else return false;
};
export const phoneValidator = dataInput => {
  let reg = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  if (reg.test(dataInput)) return true;
  else return false;
};
