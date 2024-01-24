/*
 * 6. Buatlah class bernama Eagle dengan ketentuan:
 * - Merupakan turunan dari class Animal
 * - tambahkan properti speed yang merupaakan number dan bernilai 220
 * - Memiliki method:
 * - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age} sedang terbang!"
 * - run memiliki argeument speed bernilai number dan mengembalikan nilai string "${this.name} Berlari dengan kecapatan ${speed} km";" dengan aksesk modified protected
 * - Ketika diinstansiasi, properti isMammal harus bernilai false
 *
 * npx ts-node src/eagle.ts
 */

import { Animal } from "./animal";

export class Eagle extends Animal {
  speed: number;
  readonly isMamal: boolean = false;

  constructor(name: string, speed: number, age?: number) {
    super(name, age);
    this.speed = speed;
  }

  fly(): string {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  }

  protected run(): string {
    return `${this.name} Berlari dengan kecapatan ${this.speed} km`;
  }
}

// uncomment 3 baris ini untuk melihat hasilnya
// const eagle = new Eagle("Elang", 200);
// console.dir(eagle);
// console.log(eagle.fly());
// console.log(eagle.run());  // error, karena protected
