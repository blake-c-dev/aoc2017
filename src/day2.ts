import { readFile } from "./utils";

export function day2() {
  const input = readFile(2);

  const cleanInput = input
    .split("\n")
    .map((row) => row.split("\t").map((item) => Number(item)));

  const result = cleanInput
    .map(addLargestAndSmallest)
    .reduce((prev, cur) => prev + cur, 0);

  function addLargestAndSmallest(arr: Array<number>): number {
    return Math.max(...arr) - Math.min(...arr);
  }

  console.log(`Part 1: ${result}`);

  const result2 = cleanInput
    .map(findEvenDivisor)
    .reduce((prev, cur) => prev + cur, 0);

  function findEvenDivisor(arr: Array<number>): number {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] % arr[j] === 0) {
          return arr[i] / arr[j];
        }
        if (arr[j] % arr[i] === 0) {
          return arr[j] / arr[i];
        }
      }
    }
    return -1;
  }

  console.log(`Part 2: ${result2}`);
}
