/* 
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 * - Menerima dua buah argumen number, a dan b.
 * - Mengembalikan nilai terkecil antara a atau b.
 * - Bila nilai keduanya sama, maka kembalikan dengan nilai a *
 * contoh:
 * minimal(1, 4) // 1
 * minimal(3, 2) // 2
 * minimal(3, 3) // 3
 *
 * npx ts-node src/minimal.ts
 */

function minimal(a: number, b: number): number {
  // return Math.min(a, b);
  
  let min: number;

  if (a <= b) {
    min = a;
  } else {
    min = b;
  }

  return min;
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));
