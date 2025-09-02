
/**
 * Acepta delimitadores como ("," "/" ";" "-")  y devuelve la suma de los números contenidos en el string
 * @param numbers 
 * @returns 
 */


type DELIMITERS = "," | "/" | ";";


export const add = (numbers: string, delimiters: DELIMITERS = ','): number => {

  if (numbers.trim() === '') {
    throw new Error("No se pueden sumar strings vacíos");
  }

  const regexNumeroValido = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
  const numberArrays = numbers.split(delimiters);

  for (const item of numberArrays) {
    const valor = item.trim();
    if (!regexNumeroValido.test(valor)) {
      throw new Error("No se pueden sumar letras");
    }
  }

  const total = numberArrays.reduce((acc, current) => acc + parseFloat(current), 0);

  return total;


}