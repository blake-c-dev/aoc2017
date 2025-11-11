import { readFile } from "./utils";

export function day8() {
  const input = readFile(8).split("\n");

  const registers = new Map<string, number>();
  let highestSeenValue = Number.MIN_SAFE_INTEGER;

  function processLine(line: string) {
    const [result, cond] = line.split(" if ");
    const [registerKey, comparator, compareValue] = cond.split(" ");

    if (!registers.has(registerKey)) {
      registers.set(registerKey, 0);
    }
    const shouldProceed = eval(
      `${registers.get(registerKey)} ${comparator} ${compareValue}`,
    );
    if (shouldProceed) {
      const [resultKey, operation, value] = result.split(" ");
      if (operation === "inc") {
        registers.set(
          resultKey,
          (registers.get(resultKey) || 0) + parseInt(value),
        );
      } else if (operation === "dec") {
        registers.set(
          resultKey,
          (registers.get(resultKey) || 0) - parseInt(value),
        );
      }
      highestSeenValue = Math.max(
        highestSeenValue,
        registers.get(resultKey) as number,
      );
    }
  }

  input.forEach(processLine);

  console.log(`Part 1: ${Math.max(...Array.from(registers.values()))}`);

  console.log(`Part 2: ${highestSeenValue}`);
}
