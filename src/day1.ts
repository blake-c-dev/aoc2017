import { readFile } from "./utils";

export function day1() {
  const input = readFile(1).split("");
  let result = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      result += Number(input[i]);
    }
  }

  if (input[input.length - 1] === input[0]) {
    result += Number(input[input.length - 1]);
  }

  console.log(`Part 1: ${result}`);

  let result2 = 0;

  for (let i = 0; i < input.length; i++) {
    let halfwayAroundIndex = (i + input.length / 2) % input.length;
    if (input[i] === input[halfwayAroundIndex]) {
      result2 += Number(input[i]);
    }
  }

  console.log(`Part 2: ${result2}`);
}
