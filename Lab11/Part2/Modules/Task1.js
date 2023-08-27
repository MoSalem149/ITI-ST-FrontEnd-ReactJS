const arrNumbers = [67, 23, 89, 12, 56, 37, 98, 42, 66, 87];

const ascSorted = arrNumbers.slice().sort((a, b) => a - b);
const descSorted = arrNumbers.slice().sort((a, b) => b - a);

const filteredArrNumbers = arrNumbers.filter((num) => num > 50);

const maxArrNumber = Math.max(...arrNumbers);
const minArrNumber = Math.min(...arrNumbers);

export {
  ascSorted,
  descSorted,
  filteredArrNumbers,
  maxArrNumber,
  minArrNumber,
};
