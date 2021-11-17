
function getRandomPositiveInteger (a1, b1) {

  const lower = Math.ceil(Math.min(Math.abs(a1), Math.abs(b1)));
  const upper = Math.floor(Math.max(Math.abs(a1), Math.abs(b1)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {getRandomPositiveInteger};
