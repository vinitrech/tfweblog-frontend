/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable operator-assignment */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
function CnpjValidator(cnpj) {
  var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var c = String(cnpj).replace(/[^\d]/g, "");

  if (c.length !== 14) return false;

  if (/0{14}/.test(c)) return false;

  for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
  if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
  if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

  return true;
}

export default CnpjValidator;
