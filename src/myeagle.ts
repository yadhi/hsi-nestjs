/*
 * 9. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 * - properti name bernilai: "Elo"
 * - properti age bernilai: 4
 *
 * const myEagle = new Eagle("Elo", 4, 220);
 * myEagle.fly()); Elo yang berumur 4 sedang terbang!
 * myEagle.run() Error karena method run memiliki access modifier protected
 *
 * npx ts-node src/myeagle.ts
 */

import { Eagle } from "./eagle";

const myEagle = new Eagle("Elo", 4, 220);
console.dir(myEagle);
console.log(myEagle.fly());
// console.log(myEagle.run());
