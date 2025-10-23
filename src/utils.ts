import * as fs from "fs";
import * as path from "path";

export const readFile = (day: number): string => {
  const filePath = path.join(__dirname, "data", `day${day}.txt`);
  return fs.readFileSync(filePath, "utf-8");
};
