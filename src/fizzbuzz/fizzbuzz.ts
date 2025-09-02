

export const fizzBuzz = (number: number): string => {


  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';

  if (number % 3 === 0) return "fizz";

  if (number % 5 === 0) return 'buzz';


  throw new Error("El numero debe ser divisible por 3 y por 5");
}