/*
 * 8. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 * - properti name bernilai: "Labi"
 * - properti age bernilai: 2
 *
 * const myRabbit = new Rabbit("Labi", 2);
 * myRabbit.eat()); Labi yang berumur 2 sedang makan!
 *
 * npx ts-node src/myrabbit.ts
 */

import { Rabbit } from "./rabbit";

const myRabbit = new Rabbit("Labi", 2);
console.dir(myRabbit);
console.log(myRabbit.eat());
