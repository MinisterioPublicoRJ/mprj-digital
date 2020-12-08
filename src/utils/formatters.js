/* eslint-disable */
/**
 * Normalize a string, good for compare purposes.
 * Remove whitespaces from begin and end, convert special caracters to undiacritic forms and lowercase string.
 * @param  {string} string String to be normalized: "      äëïöüáóíéèàìôēāăŏčšřžåçșñďľňť      "
 * @return {string}        string normalized: "aeiouaoieeaioeaaocsrzacsndlnt"
 */
export function normalizeString(string) {
  return string
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}
/**
 * Convert a string to CamelCase normative.
 * Lower case first word, capitalize first caracter of nexts words and remove whitespaces between.
 * @param  {string} string string to be camilized
 * @return {string}        StringToBeCamelized
 */
export function camelizeString(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, '');
}
