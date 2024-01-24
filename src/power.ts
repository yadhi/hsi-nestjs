/*
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 * - Menerima dua buah argumen number, a dan b.
 * - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat). *
 * contoh:
 * power(7, 3) // 343
 * power(3, 3) // 27
 * power(4, 0.5) // 2
 * 
 * npx ts-node src/power.ts
 */

function power(a: number, b: number): number {
  // return Math.pow(a, b);

  let pow: number = a ** b;

  return pow;
}

console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));
