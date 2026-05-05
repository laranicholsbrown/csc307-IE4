const HAS_DIGIT = /[0-9]/;
const HAS_UC = /[A-Z]/;

export function isValid(pwd) {
  return checkLength(pwd) && checkDigit(pwd) && checkCase(pwd);
}

function checkLength(pwd) {
  return pwd.length >= 6 && pwd.length <= 10;
}

function checkDigit(pwd) {
  return !!pwd.match(HAS_DIGIT);
}

function checkCase(pwd) {
  return !!pwd.match(HAS_UC);
}
0;
