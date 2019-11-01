export const required = value => {
  return value ? undefined : "Required field";
};

export const removeSpaces = string => string.replace(/\s/gm, "");

export const validateOnString = value =>
  value && /^[a-zA-ZА-Яа-я]$/i.test(value) ? undefined : "Only letters allowed";

export const validatePhoneNumber = value =>
  value && !/^([0-9]{9})$/i.test(value) ? "invalidPhoneField" : undefined;
