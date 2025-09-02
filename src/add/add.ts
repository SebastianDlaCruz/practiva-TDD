
/**
 * Acepta delimitadores como ("," "/" ";" "-")  y devuelve la suma de los números contenidos en el string
 * @param numbers 
 * @returns 
 */


type DELIMITERS = "," | "/" | ";";


export const add = (numbers: string, delimiters: DELIMITERS = ','): number => {

  const numberArrays = numbers.split(delimiters);
  const total = numberArrays.reduce((acc, current) => acc + parseFloat(current), 0);
  return total;
}