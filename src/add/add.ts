export const add = (numbers: string): number => {
  const numberArrays = numbers.split(',');
  const total = numberArrays.reduce((acc, current) => acc + parseFloat(current), 0);
  return total;
}