/*
 * 4. Buatlah class bernama Animal dengan ketentuan:
 * - Memiliki properti:
 * - name: string
 * - age: int
 * - isMammal: boolean
 * - Memiliki constructor untuk menginisialisasi properti:
 * - name
 * - age
 * - isMammal
 */

export class Animal {
  name: string;
  age?: number;
  isMamal?: boolean;

  constructor(name: string, age?: number, isMamal?: boolean) {
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  };
}

