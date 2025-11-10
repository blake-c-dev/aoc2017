import { readFile } from "./utils";

export function day4() {
  const input = readFile(4)
    .split("\n")
    .map((line) => line.split(" "));

  let validCount = 0;
  const seenSets = input.map((line) => {
    const seenSet = new Set<string>();
    line.forEach((word) => {
      seenSet.add(word);
    });

    return seenSet;
  });

  for (let i = 0; i < input.length; i++) {
    if (input[i].length === seenSets[i].size) {
      validCount += 1;
    }
  }

  console.log(`Part 1: ${validCount}`);

  // Part 2;
  const sortedInputs = input.map((line) => {
    return line.map((word) => word.split("").sort().join());
  });
  const sortedSeenSets = sortedInputs.map((line) => {
    const seenSet = new Set<string>();
    line.forEach((word) => {
      seenSet.add(word);
    });

    return seenSet;
  });

  let sortedValidCount = 0;
  for (let i = 0; i < sortedInputs.length; i++) {
    if (sortedInputs[i].length === sortedSeenSets[i].size) {
      sortedValidCount += 1;
    }
  }
  console.log(`Part 2: ${sortedValidCount}`);
}
