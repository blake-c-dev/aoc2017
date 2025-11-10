import { readFile } from "./utils";

export function day5() {
  let input = readFile(5)
    .split("\n")
    .map((str) => Number(str));

  let position = 0;
  let steps = 0;

  while (position < input.length) {
    const jumpPower = input[position];
    input[position] += 1;
    position += jumpPower;
    steps += 1;
  }

  console.log(`Part 1: ${steps}`);

  // part 2
  input = readFile(5)
    .split("\n")
    .map((str) => Number(str));

  position = 0;
  steps = 0;
  while (position < input.length) {
    const jumpPower = input[position];
    if (jumpPower >= 3) {
      input[position] -= 1;
    } else {
      input[position] += 1;
    }
    position += jumpPower;
    steps += 1;
  }

  console.log(`Part 2: ${steps}`);
}
