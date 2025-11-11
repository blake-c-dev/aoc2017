import { exit } from "process";
import { readFile } from "./utils";

export function day7() {
  const input = readFile(7).split("\n");

  const edgeMap = new Map<string, [string[], number]>();

  input.forEach((line) => {
    // has children
    if (line.includes("->")) {
      const split = line.split(" -> ");
      const key = split[0].split(" ")[0];
      const weight = split[0].split("(")[1].split(")")[0];
      const children = split[1].split(", ");
      edgeMap.set(key, [children, parseInt(weight)]);
    } else {
      const weight = line.split(" ")[1].split("(")[1].split(")")[0];
      edgeMap.set(line.split(" ")[0], [[], parseInt(weight)]);
    }
  });
  const childrenSet = new Set();
  Array.from(edgeMap.values()).forEach((arr) => {
    arr[0].forEach((node) => {
      childrenSet.add(node);
    });
  });

  const base = Array.from(edgeMap.keys()).find((key) => !childrenSet.has(key));

  console.log(`Part 1: ${base}`);

  // This is so jank
  let fixedUnbalancedWeight = Number.MAX_SAFE_INTEGER;
  function dfs(node: string): number {
    const children = edgeMap.get(node)?.[0] as string[];
    const currentWeight = edgeMap.get(node)?.[1] as number;
    const weights = children.map((child) => dfs(child));
    const weightsSet = new Set(weights);

    if (weightsSet.size > 1) {
      const dif = Array.from(weightsSet)[0] - Array.from(weightsSet)[1];
      for (const weight of weightsSet.values()) {
        if (weights.filter((val) => val === weight).length === 1) {
          const index = weights.findIndex((val) => val === weight);
          const outOfPlaceNode = edgeMap.get(children[index])?.[1] as number;
          fixedUnbalancedWeight = Math.min(
            fixedUnbalancedWeight,
            outOfPlaceNode + dif,
          );
        }
      }
    }
    return weights.reduce((sum, weight) => sum + weight, 0) + currentWeight;
  }

  dfs(base as string);

  console.log(`Part 2: ${fixedUnbalancedWeight}`);
}
