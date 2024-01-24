/*
 * 10. Buatlah instance dari class EagleRun bernama "speedTes" dengan ketentuan:
 * - properti name bernilai: "Labi"
 * - properti speed bernilai: 220
 *
 * const speedTes = new EagleRun("Kuku", 220)
 * speedTes.runEagle() // Kuku Berlari dengan kecapatan 220 km";
 *
 * npx ts-node src/speedtest.ts
 */

import { EagleRun } from "./eaglerun";

const speedTes = new EagleRun("Kuku", 220);
console.dir(speedTes);
console.log(speedTes.runEagle());
