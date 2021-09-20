/** 
 * Uang Rp. 155.000 berapa uang jika dipecah ke
 * 50ribuan, 20ribuan, 10ribuan, 5ribuan output :
 * Rp 50rb = 3 lembar
 * Rp 20rb = 2 lembar
 * Rp 10rb = 3 lembar
 * Rp 5rb = 5 lembar
 */

const money = 115000;
let limaPuluhRb, duaPuluhRb, sepuluhRb, limaRb, sisa;

limaPuluhRb = parseInt(money / 50000);
sisa = money % 50000;

duaPuluhRb = parseInt(sisa / 20000);
sisa = sisa % 20000;

sepuluhRb = parseInt(sisa / 10000);
sisa = sisa % 10000;

limaRb = parseInt(sisa / 5000);
sisa = sisa % 5000;

console.log(`Rp.50rb = ${limaPuluhRb} lembar 
Rp.20rb = ${duaPuluhRb} 
lembar Rp.10rb = ${sepuluhRb} 
lembar Rp.5rb = ${limaRb} lembar `);
console.log();