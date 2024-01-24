/*
 * 3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
 * - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b hanya menerima kata-kata ganjil dan genap
 * - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya adalah ganjil / genap
 *
 * contoh:
 * perjumlahBilangan([1,2,3], "ganjil") //4
 * perjumlahBilangan([1,2,3,4,5,6,7], "genap") //12
 * perjumlahBilangan([1,2,3,4,5], "ganjil") // 9
 * perjumlahBilangan([1,2,3,4,5,6,7], "ganj") //error
 * perjumlahBilangan([1,2,3,4,5,6,7], "positif") //error
 * 
 * npx ts-node src/penjumlahbilangan.ts
 */

function penjumlahanBilangan(a: number[], b: string) {
  let validB = ["ganjil", "genap"];

  if (!validB.includes(b)) {
    return "error";
  }

  // let sum = a.reduce((acc, current) => acc + ((current % 2) == 0 && (b == "ganjil") ? current : 0), 0);
  let sum = a.reduce((accumulator, currentValue) => {
    if (b == "ganjil" && currentValue % 2 == 1) {
      accumulator += currentValue;
    } else if (b == "genap" && currentValue % 2 == 0) {
      accumulator += currentValue;
    }

    return accumulator;
  }, 0);

  return sum;
}

console.log(penjumlahanBilangan([1, 2, 3], "ganjil"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "ganj"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "positif"));
