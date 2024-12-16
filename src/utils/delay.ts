export default function delay(number: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('run');
    }, number);
  });
}
