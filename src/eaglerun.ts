/*
 * 7 Buatlah class bernama EagleRun dengan ketentuan:
 * - Merupakan turunan dari class Eagle
 * - Memiliki method:
 * - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age} sedang terbang!"
 * - runEagle yang mengembalikan menjalakan method run dari class Eangle
 *
 * npx ts-node src/eaglerun.ts
 */

import { Eagle } from "./eagle";

export class EagleRun extends Eagle {
  constructor(name: string, speed: number, age?: number) {
    super(name, speed, age);
    this.name = name;
    this.speed = speed;
    this.age = age;
  }
  fly(): string {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  }

  runEagle(): string {
    return this.run();
  }
}

// const eagleRun = new EagleRun("Elang", 30);
// console.dir(eagleRun);
// console.log(eagleRun.fly());
// console.log(eagleRun.runEagle());
