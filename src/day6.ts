import { readFile } from "./utils";

export function day6() {
  let input = readFile(6)
    .split("\t")
    .map((str) => Number(str));

  const seenCombos = new Set();

  let currentSet = input.join(",");
  seenCombos.add(currentSet);

  do {
    let max = Math.max(...input);
    let index = input.indexOf(max) + 1;
    input[index - 1] = 0;

    if (index > input.length - 1) {
      index = 0;
    }
    while (max) {
      input[index] += 1;
      max -= 1;

      index++;
      if (index > input.length - 1) {
        index = 0;
      }
    }

    currentSet = input.join(",");
    if (seenCombos.has(currentSet)) {
      break;
    }
    seenCombos.add(currentSet);
  } while (true);

  console.log(`Part 1: ${seenCombos.size}`);

  const lastSeenIndex = Array.from(seenCombos.values()).indexOf(currentSet);

  console.log(`Part 2: ${seenCombos.size - lastSeenIndex}`);
}
