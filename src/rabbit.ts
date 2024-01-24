/*
5. Buatlah class bernama Rabbit dengan ketentuan:
* - Merupakan turunan dari class Animal 
* - Memiliki method: 
* - eat yang mengembalikan nilai string "${this.name} yang berumur ${this.age} sedang makan!" 
* - Ketika diinstansiasi, properti isMammal harus bernilai true
*
* npx ts-node src/rabbit.ts
*/

import { Animal } from "./animal";

export class Rabbit extends Animal {
  readonly isMamal: boolean = true;

  constructor(name: string, age: number, isMamal: boolean = true) {
    super(name, age, isMamal);
  }

  eat(): string {
    return `${this.name} yang berumur ${this.age} sedang makan!`;
  }
}

// const rabbit = new Rabbit("Kelinci", 2);
// console.dir(rabbit);
// console.log(rabbit.eat());
