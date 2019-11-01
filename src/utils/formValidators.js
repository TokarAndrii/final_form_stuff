export const required = value => {
  return value ? undefined : "Required field";
};

export const removeSpaces = string => string.replace(/\s/gm, "");

export const validateOnString = value =>
  value && /^[a-zA-ZА-Яа-я]+$/gi.test(value)
    ? undefined
    : "Only letters allowed";

const MIN_WIDTH = 3;

export const minValueLength = value =>
  value && isNaN(value) && value.length >= MIN_WIDTH
    ? undefined
    : `Length should be greater than ${MIN_WIDTH}`;

export const validatePhoneNumber = value =>
  value && !/^([0-9]{9})$/i.test(value) ? "invalidPhoneField" : undefined;
