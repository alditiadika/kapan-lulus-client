export const isEmpty = stringData => {
  return new Promise((resolve, reject) => {
    if (stringData === null || stringData === undefined || stringData === "")
      resolve({ isError: true, data: stringData, case: "empty" });
    else reject({ isError: false, data: stringData, case: "empty" });
  });
};
export const emailValidator = dataInput => {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return new Promise((resolve, reject) => {
    if (reg.test(dataInput))
      resolve({ isError: false, data: dataInput, case: "email" });
    else reject({ isError: true, data: dataInput, case: "email" });
  });
};
export const phoneValidator = dataInput => {
  let reg = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  return new Promise((resolve, reject) => {
    if (reg.test(dataInput))
      resolve({ isError: false, data: dataInput, case: "phone" });
    else reject({ isError: true, data: dataInput, case: "phone" });
  });
};
